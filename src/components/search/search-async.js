import React from 'react';
import fetch from 'isomorphic-fetch';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './styles.css';
import AsyncTypeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";

const PER_PAGE = 50;
const SEARCH_URI = 'https://api.github.com/search/users';

function makeAndHandleRequest(query, page = 1) {
    return fetch(`${SEARCH_URI}?q=${query}+in:login&page=${page}&per_page=50`)
        .then(resp => resp.json())
        .then(({ items, total_count }) => {
            /* eslint-disable-line camelcase */
            const options = items.map(i => ({
                avatar_url: i.avatar_url,
                id: i.id,
                login: i.login,
                html_url: i.html_url,
            }));
            return { options, total_count };
        });
}

class Search extends React.Component {
    state = {
        isLoading: false,
        options: [],
        query: '',
    };

    _cache = {};

    render() {
        return (
            <AsyncTypeahead
                {...this.state}
                id="async-pagination-example"
                labelKey="login"
                maxResults={PER_PAGE - 1}
                minLength={2}
                onInputChange={this._handleInputChange}
                onPaginate={this._handlePagination}
                onSearch={this._handleSearch}
                paginate
                placeholder="Search for a Github user..."
                renderMenuItemChildren={option => (

                    <div
                        key={option.id}
                        onClick={() => window.open(option.html_url,"_self")}
                    >
                        <img
                            alt={option.login}
                            src={option.avatar_url}
                            style={{
                                height: '24px',
                                marginRight: '10px',
                                width: '24px',
                            }}
                        />
                        <span>{option.login}</span>
                    </div>
                )}
                useCache={false}
            />
        );
    }

    _handleInputChange = query => {
        this.setState({ query });
    };

    _handlePagination = (e, shownResults) => {
        const { query } = this.state;
        const cachedQuery = this._cache[query];

        // Don't make another request if:
        // - the cached results exceed the shown results
        // - we've already fetched all possible results
        if (
            cachedQuery.options.length > shownResults ||
            cachedQuery.options.length === cachedQuery.total_count
        ) {
            return;
        }

        this.setState({ isLoading: true });

        const page = cachedQuery.page + 1;

        makeAndHandleRequest(query, page).then(resp => {
            const options = cachedQuery.options.concat(resp.options);
            this._cache[query] = { ...cachedQuery, options, page };
            this.setState({
                isLoading: false,
                options,
            });
        });
    };

    _handleSearch = query => {
        if (this._cache[query]) {
            this.setState({ options: this._cache[query].options });
            return;
        }

        this.setState({ isLoading: true });
        makeAndHandleRequest(query).then(resp => {
            this._cache[query] = { ...resp, page: 1 };
            this.setState({
                isLoading: false,
                options: resp.options,
            });
        });
    };
}

export default Search
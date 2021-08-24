import React from 'react';
import { Spinner } from 'react-bootstrap';
import {ClearButton, Menu, Typeahead} from 'react-bootstrap-typeahead';

import options from './data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './styles.css';
import MenuItem from "react-bootstrap-typeahead/lib/components/MenuItem";
<<<<<<< HEAD
import {labelKeyType} from "react-bootstrap-typeahead/lib/propTypes";
=======
<<<<<<< HEAD
import {labelKeyType} from "react-bootstrap-typeahead/lib/propTypes";
=======
>>>>>>> 8c89402 (Async and without Typehead Bootstrap 5 search)
>>>>>>> 9b7df9b (Async and without Typehead Bootstrap 5 search)

const search = () => {
    return (
        <Typeahead
            id="onclear-example"
            options={options}
            renderMenu={(results, menuProps) => (
                <Menu {...menuProps}>
                    {results.map((result, index) => (
                        <MenuItem
                            key={index}
                            option={result}
                            position={index}
                            onClick={() => window.open(result.link,"_self")}>
                            {result.label} - {result.link}
                        </MenuItem>
                    ))}
                </Menu>
            )}
            placeholder="Choose a state...">
            {({onClear, selected}) => (
                <div className="rbt-aux">
                    {!!selected.length && <ClearButton onClick={onClear}/>}
                    {!selected.length && <Spinner animation="grow" size="sm"/>}
                </div>
            )}
        </Typeahead>
    )
}

export default search
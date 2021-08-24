import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import App from './App';
import Header from './components/header'
import Footer from './components/footer'
import Service from './components/service'
import About from './components/about'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/service" component={Service} />
                <Route path="/about" component={About} />

            </Switch>
            <Footer/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
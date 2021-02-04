import logo from './logo.svg';

// import './App.css';
import React, {Component} from 'react';
import {SportsStoreDataStore} from "./data/DataStore";
import {Provider, provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ShopConnector} from "./shop/ShopConnector";

export default class App extends Component {
    render() {
        //building up the front-end here;
        //
    return <Provider store={SportsStoreDataStore}>
        <Router>
        <Switch>
            <Route path="/shop" component={ ShopConnector} />

            <Redirect to ="/shop" />
            </Switch>
            </Router>
            </Provider>
    }
}
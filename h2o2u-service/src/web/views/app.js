import React from 'react'
import { render } from 'react-dom'
import User from 'User'
import PageNotFound from 'PageNotFound'
import MainApp from 'MainApp'
import Yes from 'Yes'
import Col from 'Col'
import No from 'No'
import Intro from 'Intro'
import Store from 'Store'
import Fluxxor from 'fluxxor'
import actions from 'actions'

import { browserHistory, Router, Route, Link } from 'react-router';
import 'h202.css';
import "Col.css";
import formView from 'formView'
import { browserHistory, Router, Route, Link } from 'react-router';
import 'h202.css';
import "formView.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var stores = {
    Store: new Store()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var IntroWrapper = React.createClass({
    render: function () {
        return (
            <Intro flux={flux} hasProblem={false} />
        );
    }
});


render((
    <MuiThemeProvider>
        <Router>
            <Route path="/yes" component={Yes} />
            <Route path="/color" component={Col} />
            <Route path ="/formView" component={formView}/>
            <Route path="/no" component={No} />
            <Route path="/intro" component={IntroWrapper} />

            <Route path="/" component={MainApp}>
                <Route path="user/:userID" component={User} />
            </Route>
            <Route path="*" component={PageNotFound} />
        </Router>
    </MuiThemeProvider>

), document.getElementById('example'))

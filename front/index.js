import React, {Component} from "react";
import ReactDOM from 'react-dom';

import LoginPage from './containers/loginPage';
import LandingPitch from './components/landingPitch.js';


import './css/index.sass';
import 'semantic-ui-css/semantic.min.css';
import NavBar from "./components/navbar";
import BackendClient from "./client";
import App from "./App";
import Banner from "./components/banner";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userID: null
        }
    }

    onLogin = (userID) => {
        this.setState({
            loggedIn: true,
            userID: userID
        })
    }

    render() {
        const {loggedIn, userID} = this.state;

        return (
            <div>
                {
                    !loggedIn &&
                    <div>
                        <Banner/>
                        <LoginPage
                            onSubmit={this.onLogin}
                        />
                        <LandingPitch/>
                    </div>
                } {
                    loggedIn &&
                    <App
                        userID={userID}
                    />
                }
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("react-entry")
);

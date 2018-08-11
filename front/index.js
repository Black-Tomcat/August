import React, {Component} from "react";
import ReactDOM from 'react-dom';

import LoginPage from './containers/loginPage';
import UserPage from './containers/userPage';
import ProjectPage from './containers/projectPage';
import LandingPitch from './components/landingPitch.js';


import './css/index.sass';
import 'semantic-ui-css/semantic.min.css';
import NavBar from "./components/navbar";
import BackendClient from "./client";
import MarketPage from "./containers/marketPage";
import Banner from "./components/banner";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: null
        }
    }

    onLogin(username) {
        this.setState({
            loggedIn: true,
            username: username
        })
    }

    render() {
        const {loggedIn, username} = this.state;

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
                        username={username}
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

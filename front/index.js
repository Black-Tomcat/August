import React, {Component} from "react";
import ReactDOM from 'react-dom';

import LoginPage from './containers/loginPage';
import UserPage from './containers/userPage';
import ProjectPage from './containers/projectPage';


import './css/index.sass';
import 'semantic-ui-css/semantic.min.css';
import NavBar from "./components/navbar";
import BackendClient from "./client";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            viewing: "user",
            pageInfo: null,
            user: null,
        }
    }

    updateUser = (userObject) => {
        console.log(userObject);
        this.setState({
            loggedIn: true,
            pageInfo: userObject
        });
    };

    updateViewingFromNav = (e, {name}) => {
        if (name === "My Page") {
            const backendClient = new BackendClient();

            backendClient.getUserByName(this.state.user, userObject => {
                this.updateUser(userObject)
            });
        } else if (name === "") {

        }
    };

    onLogin = (username) => {
        const backendClient = new BackendClient();

        backendClient.getUserByName(username, (userObject) => {
            this.updateUser(userObject)
        });
    };

    render() {
        const {loggedIn, viewing, pageInfo} = this.state;

        return (
            <div>
                {loggedIn && <NavBar
                    updatePage={this.updateViewingFromNav}
                />}
                {!loggedIn && <LoginPage onSubmit={this.onLogin}/>}
                {loggedIn && viewing === "user" && <UserPage user={pageInfo}/>}
                {loggedIn && viewing === "project" && <ProjectPage project={pageInfo}/>}
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("react-entry")
);

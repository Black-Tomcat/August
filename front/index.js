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
            viewing: "user",
            pageInfo: null,
            user: null,

            all: [],
            usersLoaded: false,
            projectsLoaded: false
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
        const backendClient = new BackendClient();

        if (name === "My Page") {
            backendClient.getUserByName(this.state.user, userObject => {
                this.updateUser(userObject)
            });
        } else if (name === "Marketplace") {
            backendClient.searchProjects("", projects => {
                this.setState(prevState => ({
                    all: [...prevState.all, ...projects],
                    projectsLoaded: true
                }))
            });
            backendClient.searchUsers("", users => {
                this.setState(prevState => ({
                    all: [...prevState.all, ...users],
                    usersLoaded: true
                }))
            })
        }
    };

    onLogin = (username) => {
        const backendClient = new BackendClient();

        backendClient.getUserByName(username, (userObject) => {
            this.updateUser(userObject)
        });
    };

    render() {
        const {loggedIn, viewing, pageInfo, usersLoaded, projectsLoaded, users, projects} = this.state;



        return (
            <div>
                {loggedIn &&
                    <NavBar
                        updatePage={this.updateViewingFromNav}
                    />
                }
                {!loggedIn &&
                    <div>
                        <Banner/>
                        <LoginPage
                            onSubmit={this.onLogin}
                        />
                         <LandingPitch/>
                    </div>
                }
                {loggedIn && viewing === "user" &&
                    <UserPage
                        user={pageInfo}
                    />
                }
                {loggedIn && viewing === "project" &&
                    <ProjectPage
                        project={pageInfo}
                    />
                }
                {loggedIn && usersLoaded && projectsLoaded && viewing === "marketplace" &&
                    <MarketPage
                        users={users}
                        projects={projects}
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

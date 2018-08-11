import React, {Component} from "react";
import PropTypes from 'prop-types';

import LoginPage from './containers/loginPage';
import UserPage from './containers/userPage';
import ProjectPage from './containers/projectPage';
import LandingPitch from './components/landingPitch.js';


import './css/index.sass';
import 'semantic-ui-css/semantic.min.css';
import NavBar from "./components/navbar";
import BackendClient from "./client";
import MarketPage from "./containers/marketPage";
import NewProjectPage from './containers/newProjectPage';
import Banner from "./components/banner";


export default class App extends Component {
    static PropTypes = {
        userID: PropTypes.string.required
    };

    constructor(props) {
        super(props);

        this.state = {
            currentlyViewing: "user", // marketplace, user, project, ...
            objectID: this.props.userID // ID of an user/project ID.
        }
    }

    updateCurrentPage = (nextPage, objectID) => {
        let payload = objectID;
        if (objectID === "me") {
            payload = (' ' + this.props.userID).slice(1);
        }

        this.setState({
            currentlyViewing: nextPage,
            objectID: payload
        });
    };

    joinProject = () => {
        const backendClient = new BackendClient();

        backendClient.addUserToProject(this.props.userID, this.state.objectID, (objectID) => {
            this.setState({
                currentlyViewing: "project"
            })
        })
    };

    render() {
        const {currentlyViewing, objectID} = this.state;

        return (
            <div>
                <NavBar transitionPage={this.updateCurrentPage}/>

                {currentlyViewing === "user" &&
                <UserPage
                    userID={objectID}
                    transitionPage={this.updateCurrentPage}
                    meID={this.props.userID}
                />
                }

                {currentlyViewing === "project" &&
                <ProjectPage
                    projectID={objectID}
                    joinProject={this.joinProject}
                    transitionPage={this.updateCurrentPage}
                />
                }

                {currentlyViewing === "marketplace" &&
                <MarketPage
                    transitionPage={this.updateCurrentPage}
                />
                }

                {currentlyViewing === "newProject" &&
                <NewProjectPage
                    transitionPage={this.updateCurrentPage}
                    userId={objectID}
                />
                }
            </div>
        )
    }
}

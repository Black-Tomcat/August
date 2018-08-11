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
import Banner from "./components/banner";


class App extends Component {
    static PropTypes = {
        username: PropTypes.string.required
    };

    constructor(props) {
        super(props);

        this.state = {
            currentlyViewing: "", // marketplace, user, project, ...
            objectID: "" // ID of an user/project ID.
        }
    }

    updateCurrentPage(nextPage, objectID) {
        this.setState({
            currentlyViewing: nextPage,
            objectID: objectID
        })
    }

    render() {
        const {currentlyViewing, objectID} = this.state;

        return (
            <div>
                <NavBar transitionPage={this.updateCurrentPage}/>

                {currentlyViewing === "user" &&
                <UserPage
                    userID={objectID}
                    transitionPage={this.updateCurrentPage}
                />
                }

                {currentlyViewing === "project" &&
                <ProjectPage
                    projectID={objectID}
                    transitionPage={this.updateCurrentPage}
                />
                }

                {currentlyViewing === "marketplace" &&
                <MarketPage
                    transitionPage={this.updateCurrentPage}
                />
                }
            </div>
        )
    }
}
import React, {Component} from "react";
import ReactDOM from 'react-dom';

import LoginPage from './containers/loginPage';
import UserPage from './containers/userPage';
import ProjectPage from './containers/projectPage';


import './css/index.sass';
import 'semantic-ui-css/semantic.min.css';
import NavBar from "./components/navbar";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            viewing: "user",
            pageInfo: "Sam",

            //
            users: {}
        }
    }

    updateViewing(param) {
        this.setState({
            viewing: param
        })
    }


    onLogin = (username) => {
        this.setState({
            loggedIn: true,
            user: username
        });
    }

    render() {
        const {loggedIn, viewing, pageInfo} = this.state;
        return (
            <div>
                {loggedIn && <NavBar/>}
                {!loggedIn && <LoginPage onSubmit={this.onLogin}/>}
                {loggedIn && viewing === "user" && <UserPage userID={"5b6e84f3d9accd808af40073"}/>}
                {loggedIn && viewing === "project" && <ProjectPage projectID={"5b6e85f4964e7c3d17455680"}/>}
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("react-entry")
);

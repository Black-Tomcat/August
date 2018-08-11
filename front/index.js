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
            viewing: "project",
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
                {loggedIn && viewing === "user" && <UserPage pageInfo={pageInfo}/>}
                {loggedIn && viewing === "project" && <ProjectPage pageInfo={pageInfo}/>}
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("react-entry")
);

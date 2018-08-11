import React, {Component} from "react";
import ReactDOM from 'react-dom';
import UserPage from './containers/userPage.js';

import LoginPage from './containers/loginPage';
import userPage from './containers/userPage';


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

    render() {
        const {loggedIn, viewing, pageInfo} = this.state;
        return (
            <div>
                {!loggedIn && <LoginPage/>}
                {loggedIn && viewing === "user" && <userPage pageInfo={pageInfo}/>}
                {loggedIn && viewing === "project" && <projectPage pageInfo={pageInfo}/>}
            </div>
        )
    }
}

ReactDOM.render(
    <UserPage />,
    document.body
);

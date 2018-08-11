import React, {Component} from 'react';

import {Item, Grid} from 'semantic-ui-react';
import UserItem from "../components/userItem";
import ProjectItem from "../components/projectItem";
import BackendClient from "../client";


export default class MarketPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            projects: []
        }
    }

    componentDidMount() {
        const backendClient = new BackendClient();

        backendClient.searchProjects("", projectObject => {
            this.setState({
                projects: projectObject
            })
        });

        backendClient.searchUsers("", userObject => {
            this.setState({
                users: userObject
            });
        })
    }

    render() {
        const userArray = this.state.users.map(el => <UserItem transitionPage={this.props.transitionPage} user={el}/>);
        const projectArray = this.state.projects.map(el => <ProjectItem transitionPage={this.props.transitionPage} project={el}/>);

        return (
            <Grid columns={2}>
                <Grid.Column>
                    <Item.Group relaxed>
                        {userArray}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column>
                    <Item.Group relaxed>
                        {projectArray}
                    </Item.Group>
                </Grid.Column>
            </Grid>
        )
    }
}
import React, {Component} from 'react';

import {Item, Grid} from 'semantic-ui-react';
import UserItem from "../components/userItem";
import ProjectItem from "../components/projectItem";


export default class MarketPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const userArray = this.props.users.map(el => <UserItem user={el}/>);
        const projectArray = this.props.projects.map(el => <ProjectItem project={el}/>);

        return (
            <Grid columns={2}>
                <Grid.Column>
                    <Item.Group>
                        {userArray}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column>
                    <Item.Group>
                        {projectArray}
                    </Item.Group>
                </Grid.Column>
            </Grid>
        )
    }
}
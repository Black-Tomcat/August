import React, {Component} from 'react';
import { Container, Header, Message, Grid } from 'semantic-ui-react'

export default class
Description extends Component {

    render() {
        const {text} = this.props;
        return [
            <Grid.Column width={3}/>,
            <Grid.Column width={6}>
                <Container text id="SomeID">

                    <Header as='h1'>Description</Header>
                    <Message color='blue'>
                        {text}
                    </Message>
                </Container>
            </Grid.Column>
        ]
    }
}
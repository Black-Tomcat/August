import React, {Component} from 'react';
import { Container, Header, Message, Grid } from 'semantic-ui-react'

export default class
Description extends Component {

    render() {
        const {text} = this.props;
        return [
            <Grid.Column width={12} style={{marginLeft: "0 !important", marginRight: "0 !important"}}>
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
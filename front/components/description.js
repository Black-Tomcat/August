import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react'

export default class Description extends Component {
    render() {
        const{text} = this.props;
        return (
            <Container text>
                <Header as='h1'>Description</Header>
                <p>{text}</p>
            </Container>
        )
    }
}
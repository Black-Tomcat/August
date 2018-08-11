import React, {Component} from 'react';
import { Container, Header, Message } from 'semantic-ui-react'

export default class Description extends Component {
    render() {
        const{text} = this.props;
        return (
            <Container text>
                <Header as='h1'>Description</Header>
                <Message color='blue'>
                    <p>
                        {text}
                    </p>
                </Message>
            </Container>
        )
    }
}
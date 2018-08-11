import React, {Component} from 'react';
import { Container, Header, Message, Grid } from 'semantic-ui-react'

export default class Description extends Component {
    render() {
        const {text} = this.props;
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}/>
                    <Grid.Column width={6}>
                        <Container text>

                            <Header as='h1'>Description</Header>
                            <Message color='blue'>
                                <p>
                                    {text}
                                </p>
                            </Message>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
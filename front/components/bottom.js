import React, {Component} from "react";
import { Grid, Container } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

export default class Bottom extends Component {
    render(){
        return(
            <Grid columns={5} divided>
                <Grid.Row>
                    <Grid.Column/>
                    <Grid.Column className="WhiteyClass2" textAlign="center">
                        <Container>
                            <Header as ='h1'>{this.props.heading1}</Header>
                            {this.props.content1}
                        </Container>
                    </Grid.Column>
                    <Grid.Column className="WhiteyClass2" textAlign="center">
                        <Container>
                            <Header as ='h1'>{this.props.heading2}</Header>
                            {this.props.content2}
                        </Container>
                    </Grid.Column>
                    <Grid.Column className="WhiteyClass2" textAlign="center">
                        <Container>
                            <Header as ='h1'>{this.props.heading3}</Header>
                            {this.props.content3}
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
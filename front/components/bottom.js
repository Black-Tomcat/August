import React, {Component} from "react";
import { Grid } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

export default class Bottom extends Component {
    render(){
        return(
            <Grid textAlign = 'center' columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header as ='h1'>{this.props.heading1}</Header>
                        <p>{this.props.content1}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as ='h1'>{this.props.heading2}</Header>
                        <p>{this.props.content2}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as ='h1'>{this.props.heading3}</Header>
                        <p>{this.props.content3}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
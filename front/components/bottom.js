import React, {Component} from "react";
import { Grid } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

export default class Bottom extends Component {
    render(){
        return(
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header as ='h1'>{this.props.heading1}</Header>
                        {this.props.content1}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as ='h1'>{this.props.heading2}</Header>
                        {this.props.content2}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as ='h1'>{this.props.heading3}</Header>
                        {this.props.content3}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
import React, {Component} from "react";
import {Image, Header, Grid} from "semantic-ui-react";

export default class InfoHeader extends Component{
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={3}>
                        <Image circular src='http://flatable.phoenixcoded.net/default/assets/images/user.png' />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h1'>
                            {this.props.heading}
                        </Header>
                        <list>
                            <ul>{this.props.headingTags}</ul>
                        </list>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
import React, {Component} from "react";
import {Image, Header, Grid} from "semantic-ui-react";

export default class InfoHeader extends Component{

    render() {
        const {heading, headingTags} = this.props;

        return (
            <div>
                <Grid>
                    <Grid.Column width={3}>
                        <Image circular src='http://flatable.phoenixcoded.net/default/assets/images/user.png' />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h1'>
                            {heading}
                        </Header>
                        <list>
                            <ul>{headingTags}</ul>
                        </list>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
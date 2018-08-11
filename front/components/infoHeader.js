import React, {Component} from "react";
import {Image, Header, Grid} from "semantic-ui-react";

export default class InfoHeader extends Component{

    render() {
        const {heading, headingTags} = this.props;

        return (
            <div>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={3}>
                        <Image circular src={this.props.profile} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as='h1'>
                            {heading}
                        </Header>
                        <ul>
                            {headingTags}
                        </ul>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
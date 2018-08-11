import React, {Component} from "react";
import {Image, Header, Grid} from "semantic-ui-react";

export default class InfoHeader extends Component{

    render() {
        const {heading, headingTags} = this.props;

        return (
            <div style={{backgroundColor: "#ffffff", padding: "8px 4px 8px 4px"}}>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={3} textAlign="center">
                        <Image circular src={this.props.profile} size="small" style={{boxShadow: "0 1px 4px 3px #d4d4d5 ", left: "24.5px"}}/>
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
import React, {Component} from 'react';

import {Grid} from 'semantic-ui-react';

import InfoHeader from '../components/infoHeader.js'
import Description from "../components/description";
import Bottom from "../components/bottom";

export default class UserPage extends Component {
    render() {
        let headingTags = ["Bachelor of Compute", "Looking for a mentor"];

        let hTagComponents = headingTags.map((tagText) => {
            return (
                <p>{tagText}</p>
            )
        });

        return (
            <Grid >
                <Grid.Row>
                    <Grid.Column>
                        <InfoHeader
                            heading="Name"
                            headingTags={hTagComponents}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Description
                            text={"This is Patrick. He does code."}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Bottom
                            heading1={"Skills"}
                            heading2={"Projects"}
                            heading3={"Mentoring"}

                            content1={"Code"}
                            content2={"Market Place"}
                            content3={"A Student"}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}


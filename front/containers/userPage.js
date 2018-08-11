import React, {Component} from 'react';

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
            <div>
                <InfoHeader
                    heading="Name"
                    headingTags={hTagComponents}
                />
                <Description
                    text={"This is Patrick. He does code."}
                />
                <Bottom
                    heading1={"Skills"}
                    heading2={"Projects"}
                    heading3={"Mentoring"}

                    content1={"Code"}
                    content2={"Market Place"}
                    content3={"A Student"}
                />
            </div>
        )
    }
}


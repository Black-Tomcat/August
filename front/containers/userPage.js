import React, {Component} from 'react';

import Header from '../components/header.js'
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
                <Header
                    heading="Name"
                    headingTags={hTagComponents}
                />
                <Description
                    text={}
                />
                <Bottom
                    heading1={}
                    heading2={}
                    heading3={}

                    content1={}
                    content2={}
                    content3={}
                />
            </div>
        )
    }
}


import React, {Component} from 'react';
import Header from '../components/header.js'

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
            </div>
        )
    }
}


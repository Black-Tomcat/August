import React, {Component} from 'react';

import InfoHeader from '../components/infoHeader.js'
import Description from "../components/description";
import Bottom from "../components/bottom";
import Client from "../client.js"

export default class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            profile: null,
            bio: null,
            mentor: false,
            skills: [],
            projects: [],
            mentoring: [],
            initiated: [],
            lookingFor: null,
            degree: null,
        };


    }

    componentDidMount() {
        let userInfo = this.getUserInfo(this.props.userId);
        this.setState(
            userInfo,
        );
    }

    getUserInfo = (userId) => {
        let client = new Client();
        return client.getUser(userId, (userInfo) => {
            this.setState(userInfo);
        });
    };


    render() {
        let headingTags = [this.state.degree, this.state.lookingFor];

        const skillComponent =
            (<li>
                {this.state.skills.map((skill) => {
                    return <ul>{skill}</ul> })}
            </li>);

        let hTagComponents = headingTags.map((tagText) => {
            return (
                <p>{tagText}</p>
            )
        });

        return (
            <div>
                <InfoHeader
                    heading={this.state.name}
                    headingTags={hTagComponents}
                />
                <Description
                    text={this.state.bio}
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


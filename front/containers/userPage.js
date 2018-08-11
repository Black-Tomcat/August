import React, {Component} from 'react';

import {Loader} from 'semantic-ui-react';

import InfoHeader from '../components/infoHeader.js'
import Description from "../components/description";
import Bottom from "../components/bottom";

export default class UserPage extends Component {

    render() {
        const {skills, degree, lookingFor, projects, mentoring, name, bio, profile} = this.props.user;

        if (this.props.user === null) {
            return <Loader/>
        }

        let headingTags = [degree, lookingFor];

        let hTagComponents = headingTags.map((tagText, i) => {
            return (
                <p key={"heading_" + i}>{tagText}</p>
            )
        });

        const skillList =
            (<ul>
                {skills.map((skill) => {
                    return <li>{skill}</li> })}
            </ul>);

        const projectList =
            (<ul>
                {projects.map((projectId) => {
                    return <li>{projectId}</li> })}
            </ul>);

        const mentoringList =
            (<ul>
                {mentoring.map((student) => {
                    return <li>{student}</li> })}
            </ul>);

        return (
            <div>
                <InfoHeader
                    heading={name}
                    profile={profile}
                    headingTags={hTagComponents}
                />
                <Description
                    text={bio}
                />
                <Bottom
                    heading1={"Skills"}
                    heading2={"Projects"}
                    heading3={"Mentoring"}

                    content1={skillList}
                    content2={projectList}
                    content3={mentoringList}
                />
            </div>
        )
    }
}


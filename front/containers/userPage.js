import React, {Component} from 'react';

import InfoHeader from '../components/infoHeader.js'
import Description from "../components/description";
import Bottom from "../components/bottom";

export default class UserPage extends Component {

    render() {
        let headingTags = [this.props.user.degree, this.props.user.lookingFor];

        let hTagComponents = headingTags.map((tagText, i) => {
            return (
                <p key={"heading_" + i}>{tagText}</p>
            )
        });

        const skillList =
            (<ul>
                {this.props.user.skills.map((skill) => {
                    return <li>{skill}</li> })}
            </ul>);

        const projectList =
            (<ul>
                {this.props.user.projects.map((projectId) => {
                    return <li>{projectId}</li> })}
            </ul>);

        const mentoringList =
            (<ul>
                {this.props.user.mentoring.map((student) => {
                    return <li>{student}</li> })}
            </ul>);

        return (
            <div>
                <InfoHeader
                    heading={this.props.user.name}
                    headingTags={hTagComponents}
                />
                <Description
                    text={this.props.user.bio}
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


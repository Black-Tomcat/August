import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Loader, Button} from 'semantic-ui-react';

import InfoHeader from '../components/infoHeader.js'
import Description from "../components/description";
import Bottom from "../components/bottom";
import Client from '../client'

export default class UserPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            user: null
        }
    }

    componentDidMount() {
        let client = new Client();
        client.getUser(this.props.userID, (user) =>{
            this.setState({
                loaded: true,
                user: user,
                isYourMentor: user.mentoring.includes(this.props.meID)
            });
        });
    }

    addMentor = () => {
        let client = new Client();                
        client.addMentor(this.props.meID, this.props.userID, (id) =>{
            this.setState({
                isYourMentor: true
            });
        });
    }

    render() {

        if (!this.state.loaded) {
            return <Loader/>
        }

        const {skills, degree, lookingFor, projects, mentoring, name, bio, profile} = this.state.user;

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
                {(this.props.userID !== this.props.meID) && !this.state.isYourMentor && <Button onClick={this.addMentor}>Add as Mentor</Button>}

                {(this.props.userID !== this.props.meID) && this.state.isYourMentor && <Button disabled onClick={this.addMentor}>Is your mentor!</Button>}
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


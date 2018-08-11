import React, {Component} from 'react';
import BackendClient from '../client.js'
import PropTypes from 'prop-types';

import {Loader, Grid, Container, Button} from 'semantic-ui-react';

import InfoHeader from '../components/infoHeader.js'
import Description from "../components/description";
import Bottom from "../components/bottom";
import Client from '../client'

export default class UserPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            user: null,
            projectItems: "",
            mentorItems: [],
        }
    }

    updateState = (userID) => {
        let backendClient = new Client();

        backendClient.getUser(userID, userObject => {
            let memberNamesStr = "";
            let count = 0;
            for (let member of userObject.mentoring) {
                backendClient.getUser(member, (user) => {
                    memberNamesStr = memberNamesStr.concat(user.name + ", ");
                    count++;
                    if (count === userObject.mentoring.length) {

                        this.setState({
                            loaded: true,
                            user: userObject,
                            memberNames: memberNamesStr
                        })
                    }
                })
            }

            let projectNamesStr = "";
            count = 0;
            for (let projectId of userObject.projects) {
                backendClient.getProject(projectId, (project) => {
                    projectNamesStr = projectNamesStr.concat(project.name + ", ");
                    count++;
                    if (count === userObject.projects.length) {

                        this.setState({
                            projectItems: projectNamesStr
                        })
                    }
                })
            }
            this.setState({
                loaded: true,
                user: userObject,
                memberNames: memberNamesStr
            })
        })
    }

    componentDidMount() {
        this.updateState(this.props.userID);
    }

    componentWillReceiveProps (newProps){
        this.updateState(newProps.userID);
    }

    addMentor = () => {
        let client = new Client();
        client.addMentor(this.props.meID, this.props.userID, (id) =>{
            this.setState({
                isYourMentor: true
            });
        });
    };

    render() {

        if (!this.state.loaded) {
            return <Loader/>
        }

        const {memberNames} = this.state;
        const {skills, degree, lookingFor, projects, mentoring, name, bio, profile} = this.state.user;

        let headingTags = [degree, lookingFor];

        let hTagComponents = headingTags.map((tagText, i) => {
            return (
                <p key={"heading_" + i}>{tagText}</p>
            )
        });

        const skillList = skills.map(el => <p style={{marginBottom: "0"}}>{el}</p>);

        return (
            <Grid columns={12}>
                <Grid.Row className="WhiteyClass margins">
                <InfoHeader
                    heading={name}
                    profile={profile}
                    headingTags={hTagComponents}
                />
                </Grid.Row>

                <Grid.Row className="WhiteyClass margins">
                <Description
                    text={bio}
                />
                {(this.props.userID !== this.props.meID) && !this.state.isYourMentor && <Button onClick={this.addMentor}>Add as Mentor</Button>}

                {(this.props.userID !== this.props.meID) && this.state.isYourMentor && <Button disabled onClick={this.addMentor}>Is your mentor!</Button>}
                </Grid.Row>

                <Grid.Row className="WhiteyClass margins">
                <Bottom
                    heading1={"Skills"}
                    heading2={"Projects"}
                    heading3={"Mentoring"}

                    content1={skillList}
                    content2={this.state.projectItems.split(", ").map(el => <p style={{marginBottom: "0"}}>{el}</p>)}
                    content3={memberNames.split(", ").map(el => <p style={{marginBottom: "0"}}>{el}</p>)}
                />
                </Grid.Row>
            </Grid>
        )
    }
}


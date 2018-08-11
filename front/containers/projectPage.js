import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Loader , Grid} from 'semantic-ui-react';

import InfoHeader from '../components/infoHeader';
import Description from '../components/description';
import Bottom from '../components/bottom';

import BackendClient from "../client";


export default class ProjectPage extends Component {
    static PropTypes = {
        projectID: PropTypes.string.required
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            project: null
        }
    }

    componentWillReceiveProps(){
        componentDidMount();
    }

    componentDidMount() {
        const backendClient = new BackendClient();

        backendClient.getProject(this.props.projectID, projectObject => {
            let memberNamesStr = "";
            let count = 0;
            for (let member of projectObject.members) {
                backendClient.getUser(member, (user) => {
                    memberNamesStr = memberNamesStr.concat(user.name + " ")
                    count++
                    if (count == projectObject.members.length) {
                        this.setState({
                            loaded: true,
                            project: projectObject,
                            memberNames: memberNamesStr
                        })
                    }
                })
            }
        })
    }

    render() {
        if (!this.state.loaded) {
            return <Loader />
        }
        else {
            const { loaded, memberNames } = this.state;
            const { name, client, description, pay, members, progress, tags, img } = this.state.project;

            return (
                <div>
                    { this.state.loaded && !error &&
                    <Grid>
                        <Grid.Row>
                        <InfoHeader
                            heading={name}
                            profile={img}
                            headingTags={tags}
                        />
                        </Grid.Row>

                        <Grid.Row>
                        <Description
                            text={description}
                        />
                        </Grid.Row>

                        <Grid.Row>
                        <Bottom
                            heading1={"Members"}
                            heading2={"Skills"}
                            heading3={"Progress"}

                            content1={memberNames}
                            content2={tags}
                            content3={progress}
                        />
                        </Grid.Row>
                    </Grid>
                    }
                </div>
            )
        }
    }

}

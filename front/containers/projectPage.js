import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Loader, Grid, Button} from 'semantic-ui-react';

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
        this.componentDidMount();
    }

    componentDidMount() {
        const backendClient = new BackendClient();

        backendClient.getProject(this.props.projectID, projectObject => {
            let memberNamesStr = "";
            let count = 0;
            for (let member of projectObject.members) {
                backendClient.getUser(member, (user) => {
                    memberNamesStr = memberNamesStr.concat(user.name + ", ");
                    count++;
                    if (count === projectObject.members.length) {
                        console.log(projectObject);
                        this.setState({
                            loaded: true,
                            project: projectObject,
                            memberNames: memberNamesStr
                        })
                    }
                })
            }
            this.setState({
                loaded: true,
                project: projectObject,
                memberNames: memberNamesStr
            })
        })
    }

    render() {
        if (!this.state.loaded) {
            return <Loader />
        }
        else {
            const { loaded, memberNames } = this.state;
            const { name, description, progress, tags, img } = this.state.project;

            return (
                <Grid columns={12}>
                    <Grid.Row className="WhiteyClass margins">
                        <InfoHeader
                            heading={name}
                            profile={img}
                            headingTags={tags}
                        />
                        <Grid.Column>
                            <Button primary onClick={this.props.joinProject}>
                                Join Project
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className="WhiteyClass margins">
                    <Description
                        text={description}
                    />
                    </Grid.Row>

                    <Grid.Row className="WhiteyClass margins">
                    <Bottom
                        heading1={"Members"}
                        heading2={"Skills"}
                        heading3={"Progress"}

                        content1={memberNames.split(", ").map(el => <p>{el}</p>)}
                        content2={tags.map(el => <p>{el}</p>)}
                        content3={progress}
                    />
                    </Grid.Row>
                </Grid>

            )
        }
    }

}

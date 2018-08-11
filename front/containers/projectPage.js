import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Loader} from 'semantic-ui-react';

import Header from '../components/infoHeader';
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

    componentDidMount() {
        const backendClient = new BackendClient();

        backendClient.getProject(this.props.projectID, projectObject => {
            this.setState({
                loaded: true,
                project: projectObject
            })
        })
    }

    render() {
        if (!this.state.loaded) {
            return <Loader/>
        }
        else {
            const {loaded} = this.state;
            const {name, client, description, pay, members, progress, tags} = this.state.project;
            return (
                <div>
                    { this.state.loaded && !error &&
                    <div>
                        <Header
                            heading={name}
                            headingTags={tags}
                        />
                        <Description
                            text={description}
                        />
                        <Bottom
                            heading1={"Members"}
                            heading2={"Skills"}
                            heading3={"Progress"}

                            content1={"dank"}
                            content2={tags}
                            content3={progress}
                        />
                    </div>
                    }
                </div>
            )
        }
    }
}

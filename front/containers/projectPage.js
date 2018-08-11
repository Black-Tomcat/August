import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Loader} from 'semantic-ui-react';

import Header from '../components/infoHeader';
import Description from '../components/description';
import Bottom from '../components/bottom';

import BackendClient from "../client";


export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {project} = this.props;
        const {name, client, description, pay, members, progress, tags} = project;
        const {} = this.state;

        return (
            <div>
                { loaded && !error &&
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
                } { loaded && !project &&
                <div>
                    There was an error getting the project requested.
                    {error}
                </div>
                } {
                    !loaded && <Loader/>
                }
            </div>
        )
    }
}
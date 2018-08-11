import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Description from '../components/description';
import Bottom from '../components/bottom';


export default class ProjectPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const {project} = this.props;
        const {name, client, description, pay, members, progress, tags} = project;
        const {} = this.state;

        return (
            <div>
                <Header
                    heading={name}
                    headingTags={tags}
                />
                <Description
                    text={description}
                />
                <Bottom
                    heading1={}
                    heading2={}
                    heading3={}

                    content1={}
                    content2={}
                    content3={}
                />
            </div>
        )
    }
}
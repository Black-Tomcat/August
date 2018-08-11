import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Description from '../components/description';


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
            </div>
        )
    }
}
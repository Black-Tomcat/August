import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
                    name={name}

                />
                <Description
                    text={description}
                />
            </div>
        )
    }
}
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from '../components/infoHeader';
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
                    heading1={"Members"}
                    heading2={"Skills"}
                    heading3={"Progress"}

                    content1={members}
                    content2={tags}
                    content3={progress}
                />
            </div>
        )
    }
}
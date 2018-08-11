import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class userPage extends Componet {
    static PropTypes = {
        user: PropTypes.object.required
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const {user} = this.props;
        const {} = this.state;

        return (
            <div>

            </div>
        );
    }
}
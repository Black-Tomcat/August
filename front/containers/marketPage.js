import React, {Component} from 'react';

import {Grid} from 'semantic-ui-react';


export default class MarketPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Grid columns={3}>
                {this.props.tags.map(el => {
                    if (el) {
                        return
                    } else {
                        return
                    }
                })}
            </Grid>
        )
    }
}
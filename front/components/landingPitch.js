import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

export default class PitchRowColumns extends Component {

    render(){
        const PitchRowColumns = () => (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <h4>Have an awesome project idea?</h4>
                        <p>Hello</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h4>Have the skills but lacking the idea?</h4>
                        <p>Hello2</p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <h4>Don't know where to start?</h4>
                        <p>Hello3</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h4>This is August</h4>
                        <p>The solution to all of your problems</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
        return PitchRowColumns;
    }
}
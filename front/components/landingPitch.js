import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

export default class LandingPitch extends Component {

    render(){

        const pitch =
            (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <h4>Have an awesome project idea?</h4>
                        <p>Do you have an awesome idea that you think can change the industry?
                            Or a fun project that you want to create? Any idea for a project you
                            have is welcomed here at August.</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h4>Have the skills but lacking the idea?</h4>
                        <p>Do you have experience/skill in a specific area, whether it's arts, business, science, or IT.
                            You can mentor users and guide them to completing their project and be paid!</p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <h4>Don't know where to start?</h4>
                        <p>Well with August you can with a simple click of a button you can post your idea to the whole
                            world where other users can join you on the adventure and request mentors who can guide you
                            to building your ideas.
                            You can even get paid after completing your project!</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h4>Ready to sign up?</h4>
                        <p>It is simple and easy plus it's free! Just hit the register button and enter your details
                            and be ready to create or mentor aspiring new students.</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            );

        return pitch

    }
}
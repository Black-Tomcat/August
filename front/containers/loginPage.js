import React, {Component} from 'react';
import {Input, Button, Grid} from 'semantic-ui-react';


export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.username = "";
    }


    render() {
        return (
            <div className="passwordForm">
                <Grid>
                <Grid.Row centered columns={1}>
                    <Grid.Column width={3}>
                        <Input type='text' placeholder="Username" onChange={this.usernameChange} />
                        <br />
                        <Input type='password' placeholder="Password" />
                        <Button type='submit' onClick={this.submitted}>Submit</Button>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        );
    }

    usernameChange = (event, data) => {
        this.username = data.value;
    }

    submitted = () => {
        this.props.onSubmit(this.username);
    }
}

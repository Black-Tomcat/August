import React, {Component} from 'react';
import {Input, Button, Grid, Container} from 'semantic-ui-react';
import NewUserPage from './newUserPage'
import Client from '../client';



export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.username = "";
        this.state = {
            registering: false
        }
    }

    registerUser = () => {
        this.setState({registering: true});
    };

    newUser = () => {
        this.setState({registering: false});
    };

    render() {
        if (this.state.registering){
            return <NewUserPage onNewUser={this.newUser}/>
        }
        else{
            const style = {display: "block", margin: "8px"};
            return (
                <div className="passwordForm">
                    <Grid centered>
                    <Grid.Row columns={1}>
                        <Grid.Column width={4}>
                            <Container textAlign='center'>
                                <Input type='text' placeholder="Username" onChange={this.usernameChange} style={style}/>
                                <Input type='password' placeholder="Password" style={style}/>

                                <Button type='submit' onClick={this.submitted}>Log In</Button>
                                <Button onClick={this.registerUser}>Register</Button>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </div>
            );
        }
    }

    usernameChange = (event, data) => {
        this.username = data.value;
    };

    submitted = () => {
        let client = new Client();
        client.getUserByName(this.username, (user) => {
            this.props.onSubmit(user["_id"]);
        });
    };
}

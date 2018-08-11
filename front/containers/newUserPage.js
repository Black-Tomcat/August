import React, {Component} from 'react';
import {Header, Form} from 'semantic-ui-react';
import Client from '../client.js';

export default class NewUserPage extends Component{
    constructor(props){
        super(props);
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    }

    onSubmit = () => {
        let client = new Client();
        client.addUser({
            name: this.state.username,
            degree: this.state.degree,
            skills: this.state.skills.split("\n"),
            bio: this.state.bio,
            profile: this.state.profile
        }, (status, id) => {
            this.props.onNewUser(id);
        });
    }

    render() {
        return (
        <div>
            <Header>Create new user</Header>
            <p> Welcome to August! Please fill in the following form to create
                a new user </p>
            <Form onSubmit={this.onSubmit}>
                <Form.Input label="Username" name="username" onChange={this.handleChange} />
                <Form.Input type="password" label="Password" name="password" onChange={this.handleChange} />
                <Form.Input label="Degree" name="degree" onChange={this.handleChange} />
                <Form.Input label="Profile Image URL" name="profile" onChange={this.handleChange} />
                <Form.Input label="Looking For" name="looking" onChange={this.handleChange} />
                <Form.TextArea label="bio" placeholder="Tell us a little bit about yourself" name="bio" onChange={this.handleChange} />
                <Form.TextArea label="skills" name="skills" onChange={this.handleChange} />
                <Form.Button content="Submit" type="submit"/>
            </Form>
        </div>
        );
    }
};

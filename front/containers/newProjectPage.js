import React, {Component} from 'react';
import {Input, Form} from 'semantic-ui-react';
import Client from '../client.js';

export default class NewProjectPage extends Component{
    constructor(props){
        super(props); 
        this.state = {

        }
    }

    handleChange = (e, {name, value}) =>{
        this.setState({[name]: value}); 
    }

    onSubmit = () => {
        let client = new Client();
        client.addProject({
            name: this.state.name,
            client: this.props.userId,
            description: this.state.description,
            pay: this.state.pay,
            tags: this.state.tags.split("\n"),
            img: this.state.img
        }, (projectId) => {
            this.props.transitionPage("user", "me");
        });
    }

    render(){
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Input label="Name" name="name" onChange={this.handleChange} />
                <Form.TextArea label="Description" name="description" onChange={this.handleChange} />
                <Form.Input label="Pay" name="pay" onChange={this.handleChange} />
                <Form.Input label="Image URL" name="img" onChange={this.handleChange} />
                <Form.TextArea label="tags" name="tags" onChange={this.handleChange} />
                <Form.Button type="submit" content="Submit" />
            </Form>
        );
    }
};

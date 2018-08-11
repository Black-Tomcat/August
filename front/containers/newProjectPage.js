import React, {Component} from 'react';
import {Input, Form} from 'semantic-ui-react';
import Client from '../client.js';

export default class NewProjectPage extends Component{
    constructor(props){
        super(props); 
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
            tags: this.state.tags,
            img: this.state.img
        }, (projectId) => {
            this.props.onCreate(projectId);
        });
    }

    render(){
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Input label="Name" name="name" />
                <Form.TextArea label="Description" name="description" />
                <Form.Input label="Pay" name="pay" />
                <Form.Input label="Image URL" name="img" />
                <Form.TextArea label="tags" name="tags" />
                <Form.Button type="submit" content="Submit" />
            </Form>
        );
    }
};

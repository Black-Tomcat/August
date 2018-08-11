import React, {Component} from 'react';
import {Item, Image, Loader} from 'semantic-ui-react';
import Client from '../client'


export default class UserItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {name, degree, profile} = this.props.user;

        return (
            <Item>
                <Item.Image src={profile}/>
                <Item.Content>
                    <Item.Header as="a">{name}</Item.Header>
                    <Item.Description>{degree}</Item.Description>
                </Item.Content>
            </Item>
        );
    }
};

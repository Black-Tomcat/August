import React, {Component} from 'react';
import {Item, Image, Loader} from 'semantic-ui-react';
import Client from '../client'


export default class UserItem extends Component{
    constructor(props){
        super(props);
        
        this.setState = {
            loaded: false
        }
    }


    componentDidMount(){
        let client = new Client();
        client.getUser(this.props.userId, (userInfo) => {
            userInfo.loaded = true;
            this.setState(userInfo);
        });
    }

    render(){
        return (
            <Item>
                <Loader active={!this.state.loaded} />
                {
                    loaded && <Item.Image src={this.state.profile}/>
                }
                <Item.Content>
                    <Item.Header>{this.state.name}</Item.Header>
                    <Item.Description>{this.state.degree}</Item.Description>
                </Item.Content> 
                }
            </Item>
        );
    }
};

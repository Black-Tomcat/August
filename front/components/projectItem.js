import React, {Component} from 'react';
import {Item, Image, Loader} from 'semantic-ui-react';
import Client from './client';


export default class ProjectItem extends Component {
    constructor(props){
        super(props);

        this.setState = {
            loaded: false
        }
    }

    componentDidMount(){
        let client = new Client();
        client.getProject(this.props.projectId, (projectInfo) => {
            projectInfo.loaded = true;
            this.setState(projectInfo);
        });
    }

    render(){
        return (
            <Item>
                <Loader active={!this.state.loaded} />
                {
                loaded && <Item.Image src={this.state.img} />
                }
                <Item.Content>
                    <Item.Header>{this.state.name}</Item.Header>
                    <Item.Description>{this.state.description.substring(0, 30)}</Item.Description>
                </Item.Content>
            </Item>
        )
    }
}

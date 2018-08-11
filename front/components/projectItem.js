import React, { Component } from 'react';
import { Item, Image, Loader, Card } from 'semantic-ui-react';


export default class ProjectItem extends Component {
    constructor(props) {
        super(props);
    }

    changePage = () => {
        this.props.transitionPage("project", this.props.project._id);
    };

    render() {
        const { img, name, description, tags } = this.props.project;

        return (
            <Item className="objectItems">
                {img !== null && img !== undefined && <Item.Image src={img} />}
                <Item.Content>
                    <Item.Header as="a" onClick={this.changePage}>{name}</Item.Header>
                    <Item.Description>{description.substring(0, 100)}</Item.Description>
                    <Item.Extra >{"Tags: " + tags.join(", ")}</Item.Extra>
                </Item.Content>
            </Item>
        )
    }
}

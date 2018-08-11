import React, { Component } from "react";
import { Item, Image, Loader } from "semantic-ui-react";

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }

  changePage = () => {
    this.props.transitionPage("user", this.props.user._id);
  };

  render() {
    const { name, degree, profile, bio, skills } = this.props.user;
    return (
      <Item className="objectItems">
        <Item.Image src={profile} />
        <Item.Content>
          <Item.Header as="a" onClick={this.changePage}>
            {name}
          </Item.Header>
          <Item.Meta>{degree}</Item.Meta>
          <Item.Description>{bio.substring(0, 30)}</Item.Description>
          <Item.Extra >{"Skills: " + skills.join(", ")}</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

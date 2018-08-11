import React, {Component} from "react";

export default class Header extends Component{
    render() {
        return (
            <div>
                <p>{this.props.heading}</p>
                <list>
                    <ul>{this.props.headingTags}</ul>
                </list>
            </div>
        )
    }
}
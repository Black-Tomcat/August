import React, {Component} from "react";
import { Menu, Input } from 'semantic-ui-react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    updatePage = (e, {name}) => {
        this.props.transitionPage(name, "me")
    };

    render(){
        //todo active states

        return(
         <Menu>
             <Menu.Item
                 name="user"
                 onClick={this.updatePage}
             >
                 My Page
             </Menu.Item>
             <Menu.Item
                 name="marketplace"
                 onClick={this.updatePage}
             >
                 Marketplace
             </Menu.Item>
             <Menu.Item
                 name="search"
                 onClick={this.updatePage}
             >
                 <Input icon='search' placeholder = 'Search...'/>
             </Menu.Item>

         </Menu>
        )
    }

}
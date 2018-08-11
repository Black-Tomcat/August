import React, {Component} from "react";
import { Menu, Input } from 'semantic-ui-react'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render(){
        //todo active states

        return(
         <Menu>
             <Menu.Item
                 name="My Page"
                 onClick={this.props.updatePage}
             >
                 My Page
             </Menu.Item>
             <Menu.Item
                 name="Marketplace"
                 onClick={this.props.updatePage}
             >
                 Marketplace
             </Menu.Item>
             <Menu.Item
                 name="Search"
                 onClick={this.props.updatePage}
             >
                 <Input icon='search' placeholder = 'Search...'/>
             </Menu.Item>

         </Menu>
        )
    }

}
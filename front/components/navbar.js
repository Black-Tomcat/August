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
                 name = ""
             >
                 My Page
             </Menu.Item>
             <Menu.Item
                 name = "Marketplace"
             >
                 Marketplace
             </Menu.Item>
             <Menu.Item

                 name = "Search"
             >
                 <Input icon='search' placeholder = 'Search...'/>
             </Menu.Item>

         </Menu>
        )
    }

}
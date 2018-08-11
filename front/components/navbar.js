import React, {Component} from "react";
import { Menu, Search, Grid } from 'semantic-ui-react';
import BackendClient from '../client.js';
import UserItem from '../components/userItem.js';
import _ from 'lodash';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            results: [],
            value: '',
            source: [],
            itemComponents: [],
        };
    }

    componentDidMount() {
        this.loadSearchItems();
    }

    loadSearchItems = () => {
        let backendClient = new BackendClient();

        backendClient.searchUsers({}, this.loadUsers);
        backendClient.searchProjects({}, this.loadProjects);
    };


    loadUsers = (users) => {
        let source = this.state.source;

        this.setState({
            source: source.concat(users)
        });
    };

    loadProjects = (projects) => {
        let source = this.state.source;

        this.setState({
            source: source.concat(projects)
        });
    };

    updatePage = (e, {name}) => {
        this.props.transitionPage(name, "me")
    };

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleResultSelect = (e, { result }) => {
        this.moveToUserByName(result.title);
    };

    moveToUserByName = (userName) => {
        let backendClient = new BackendClient();
        backendClient.getUserByName(userName, (user) => {
            console.log(user._id);
            this.props.transitionPage("user", user._id);
        })
    };

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.name);

            this.setState({
                isLoading: false,
                results: _.filter(this.state.source, isMatch).map((user) => {
                    return ({
                                title: user.name,
                                description: user.bio,
                                image: user.profile,
                    });
                }),
            })
        }, 300)
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
             <Search
                 loading={this.state.isLoading}
                 onResultSelect={this.handleResultSelect}
                 onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                 results={this.state.results}
                 value={this.state.value}
                 {...this.props}
             />

         </Menu>
        )
    }

}

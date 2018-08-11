import React, {Component} from 'react';
import { Header } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

export default class Banner extends Component {

    render() {
        return (
            <div>
                <Image src='https://image.ibb.co/knjQfp/LOGO.png' size='small' centered/>
                <Header as='h1' textAlign='center'>August</Header>
            </div>
        )
    }
}
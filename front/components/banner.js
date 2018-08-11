import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

export default class Banner extends Component {

    render() {
        return (
            <div>
                <Image src='https://i.imgur.com/ziTsCmj.png' size='medium' centered/>
            </div>
        )
    }
}
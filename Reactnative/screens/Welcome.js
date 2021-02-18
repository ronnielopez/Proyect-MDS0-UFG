import React, {Component, components} from 'react';
import {StyleSheet} from 'react-native';

import {Button, Block, Text} from '../components';

export default class Welcom extends Component{
    static navigationOptions = {
        header: null,
    }
    render(){
        return(
            <Block center middle>
                <Block center middle flex={0.3}>
                    <text h1 center bold> Alpha 
                    <text h1 primary> Medic </text></text>
                </Block>
                <text>

                </text>
            </Block>
        )
    }
}

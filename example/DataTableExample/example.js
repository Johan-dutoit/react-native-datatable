/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    StatusBar
} from 'react-native';

import DataTable from 'react-native-datatable';

export default class DataTableExample extends Component {

    dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
    });

    componentWillMount() {
        this.dataSource = this.dataSource.cloneWithRows([
            {
                a: 1,
                b: 2,
                c: 3
            },
            {
                a: 1,
                b: 2,
                c: 3
            },
            {
                a: 1,
                b: 2,
                c: 3
            }
        ])
    }

    render() {
        return (
            <View style={styles.container}>
                <DataTable
                    dataSource={this.dataSource}
                    fields={['a', 'b', 'c']} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    }
});
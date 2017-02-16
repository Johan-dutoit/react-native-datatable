/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    View,
    StyleSheet,
    ListView
} from 'react-native';

import DataTable from 'react-native-datatable';

const NUMBER_OF_ROWS = 40;

export default class DataTableExample extends React.Component {

    dataSource

    fields = [];
    data = [];

    constructor(props) {
        super(props);

        this.onSort = this.onSort.bind(this);

        for (var i = 0, t = NUMBER_OF_ROWS; i < t; i++) {
            var obj = {};
            for (var j = 0; j < 4; j++) {
                obj[j] = String.fromCharCode(97 + this.randomIntFromInterval(0, 25));
            }
            this.data.push(obj)
        }
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    componentWillMount() {
        dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        dataSource = dataSource.cloneWithRows(this.data);

        this.fields = [{
            label: 'a',
            sortable: true,
        },
        {
            label: 'b'
        },
        {
            label: 'c'
        },
        {
            label: 'd',
            sortable: true
        }];

        this.state = {
            dataSource: dataSource
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <DataTable
                    dataSource={this.state.dataSource}
                    onSort={this.onSort}
                    fields={this.fields} />
            </View>
        );
    }

    onSort(field, isAscending) {
        data = this.data.sort((objA, objB) => this.compare(field, isAscending, objA, objB));

        dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        dataSource = dataSource.cloneWithRows(data);

        this.setState({
            dataSource: dataSource
        })
    }

    compare(field, isAscending, objA, objB) {
        var index = this.fields.indexOf(field);
        var key = Object.keys(objA)[index];

        if (isAscending) {
            if (objA[key] < objB[key])
                return -1;
            if (objA[key] > objB[key])
                return 1;
            return 0;
        } else {
            if (objA[key] > objB[key])
                return -1;
            if (objA[key] < objB[key])
                return 1;
            return 0;
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    dataTableContainer: {
        padding: 3
    },
    cellStyle: {
        // padding: 3,
        // height: 50
    }
});
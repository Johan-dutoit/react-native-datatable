import React from 'react'
import DataTable from './dataTable';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
    });


    componentWillMount() {
        this.dataSource = this.dataSource.cloneWithRows([{
            name: 'test',
            value: 1,
            c: '4'
        }, {
            name: 'test1',
            value: 2,
            c: '5'
        }]);
    }

    render() {
        return (
            <DataTable
                dataSource={this.dataSource}
            />
        );
    }
}
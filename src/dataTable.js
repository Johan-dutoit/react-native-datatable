import React from 'react'
import {
    Image,
    View,
    ListView,
    Text,
    Dimensions,
    TouchableHighlight,
    Linking,
    LayoutAnimation
} from 'react-native';

import Style from './style';
import Cell from './cell';

class DataTable extends React.Component {
    constructor(props) {
        super(props);

        this.renderHeaderCell = this.renderHeaderCell.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    render() {
        return (
            <View style={[Style.container, this.props.containerStyle]}>
                {this.renderHeader()}
                {this.renderTable()}
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={[Style.header, this.props.headerStyle]}>
                {this.props.fields.map(this.renderHeaderCell)}
            </View>
        );
    }

    renderHeaderCell(label, i) {
        if (this.props.renderHeaderCell) {
            return this.props.renderHeaderCell(label, i);
        }

        return this.renderCell(label, i, Style.headerCell)
    }

    renderTable() {
        return (
            <ListView
                dataSource={this.props.dataSource}
                renderRow={this.renderRow} />
        );
    }

    renderRow(row, sectionId, rowId) {
        return (
            <View
                style={Style.row}
                accessible={true}>
                {this.renderCells(row)}
            </View>
        )
    }

    renderCells(row) {
        return Object.keys(row).map((key, i) => {
            var value = (row[key] || '').toString();

            return this.renderCell(value, i, this.props.cellStyle);
        })
    }

    renderCell(label, key, style) {
        return (
            <Cell
                key={key}
                style={style}
                label={label.toString()} />
        );
    }
}


DataTable.propTypes = {
    fields: React.PropTypes.array,
    dataSource: React.PropTypes.object.isRequired,
    containerStyle: React.PropTypes.number,
    renderHeaderCell: React.PropTypes.func,
    headerStyle: React.PropTypes.number,
    cellStyle: React.PropTypes.number
}

DataTable.defaultProps = {
}

export default DataTable;
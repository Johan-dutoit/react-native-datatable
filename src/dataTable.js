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
import HeaderCell from './headerCell';

class DataTable extends React.Component {
    constructor(props) {
        super(props);

        this.renderHeaderCell = this.renderHeaderCell.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.onSort = this.onSort.bind(this);

        this.state = {
            sortedField: null
        }
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

    renderHeaderCell(field, i) {
        if (this.props.renderHeaderCell) {
            return this.props.renderHeaderCell(field, i);
        }

        return (
            <HeaderCell
                key={i}
                style={this.props.headerCellStyle}
                highlightColor={this.props.headerHighlightColor}
                onSort={this.onSort}
                isSortedField={this.state.sortedField === field}
                field={field} />
        )
    }

    renderTable() {
        return (
            <ListView
                dataSource={this.props.dataSource}
                renderRow={this.renderRow} />
        );
    }

    renderRow(row, sectionId, rowId) {

        var style = rowId % 2 == 0 ? Style.row : Style.altRow

        return (
            <View
                style={style}
                accessible={true}>
                {this.renderCells(row)}
            </View>
        )
    }

    renderCells(row) {
        var keys = Object.keys(row);

        return this.props.fields.map((field, index) => {
            var key = keys[index];

            var value = row[key].toString();

            return (
                <Cell
                    key={index}
                    style={this.props.cellStyle}
                    label={value} />
            );
        });
    }

    onSort(field, isAscending) {
        if (!this.props.onSort) {
            return;
        }

        this.setState({
            sortedField: field
        });
        this.props.onSort(field, isAscending);
    }
}


DataTable.propTypes = {
    fields: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        sortable: React.PropTypes.bool
    })),
    onSort: React.PropTypes.func,
    dataSource: React.PropTypes.object.isRequired,
    containerStyle: React.PropTypes.number,
    renderHeaderCell: React.PropTypes.func,
    headerStyle: React.PropTypes.number,
    headerCellStyle: React.PropTypes.number,
    headerHighlightColor: React.PropTypes.string,
    cellStyle: React.PropTypes.number,

}

DataTable.defaultProps = {
    headerHighlightColor: 'gray'
}

export default DataTable;
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
                {this.props.fields.map(renderHeaderCell)}
            </View>
        );
    }

    renderHeaderCell(label, i) {
        if (this.props.renderHeaderCell) {
            return this.props.renderHeaderCell(label, i);
        }

        return renderCell(label, i)
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


                {this.renderCells(row, index)}
            </View>
        )
    }

    renderCell(label, key) {
        return (
            <Cell
                key={key}
                style={Style.headerCell}
                label={label} />
        );
    }
}


DataTable.propTypes = {
    dataSource: React.PropTypes.object.isRequired,
    containerStyle: React.PropTypes.number,
    headerStyle: React.PropTypes.number,

    // renderHeaderCell: React.PropTypes.func,
    // fields: React.PropTypes.array,
    // onSort: React.PropTypes.func,
    // sortField: React.PropTypes.string,
    // sortOrder: React.PropTypes.string,
    // orientation: React.PropTypes.string,
}

DataTable.defaultProps = {
    orientation: Orientation.PORTRAIT,
}


module.export = DataTable;
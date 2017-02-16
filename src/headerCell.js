import React from 'react'
import {
    View,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

import Style from './style';

class HeaderCell extends React.Component {
    constructor(props) {
        super(props);

        this.isAscending = false;
        this.hasSorted = false;

        this.onPress = this.onPress.bind(this);
    }

    render() {
        return (
            <TouchableHighlight
                onPress={this.onPress}
                disabled={!this.props.field.sortable}
                underlayColor={this.props.highlightColor}
                style={{ flex: 1, height: 40 }}>
                <Text style={[Style.cell, Style.headerCell, this.props.style]}>
                    {this.props.field.label}
                    {this.renderSortIcons()}
                </Text>
            </TouchableHighlight>
        );
    }

    renderSortIcons() {
        if (!this.props.field.sortable) {
            return null;
        }

        if (!this.props.isSortedField) {
            this.isAscending = false;
            this.hasSorted = false;
        }

        return ([
            <Text key='downArrow' style={this.getCellStyle(false)}>{'\u25BC'}</Text>,
            <Text key='upArrow' style={this.getCellStyle(true)}>{'\u25b2'}</Text>
        ]);

    }

    getCellStyle(isUp) {
        if (!this.hasSorted) {
            return Style.unsortedCell;
        }

        if (isUp) {
            return !this.isAscending ? Style.sortedCell : null
        } else {
            return this.isAscending ? Style.sortedCell : null
        }
    }

    onPress() {
        this.hasSorted = true;
        this.isAscending = !this.isAscending;
        this.props.onSort && this.props.onSort(this.props.field, this.isAscending);
    }
}

HeaderCell.propTypes = {
    field: React.PropTypes.object.isRequired,
    onSort: React.PropTypes.func,
    isSortedField: React.PropTypes.bool,
    style: React.PropTypes.number,
    highlightColor: React.PropTypes.string,
}


export default HeaderCell;
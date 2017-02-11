import React from 'react'
import {
    View,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';


class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={this.props.style}>
                {this.props.label}
            </Text>
        );
    }
}

Cell.propTypes = {
    label: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
}


export default Cell;
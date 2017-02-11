import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        minHeight: 35
    },
    headerCell: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },

    cell: {
        height: 35
    },
    positiveValue: {
        color: Color.GREEN,
    },
    negativeValue: {
        color: Color.RED,
    },
    noChangeValue: {
        color: 'black'
    },
    numericValue: {
        textAlign: 'right'
    },
    link: {
        color: Color.LINK_BLUE,
        textDecorationLine: 'underline'
    },
    icon: {
        textAlign: 'center'
    },
});
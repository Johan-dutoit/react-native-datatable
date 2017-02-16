import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    cell: {
        flex: 1,
        borderColor: 'darkgray',
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray'
    },
    headerCell: {
        flex: 1,
        textAlign: 'center',
        lineHeight: 30,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    altRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightblue'
    },
    contentCell: {
    },
    sortedCell: {
        color: 'grey'
    },
    unsortedCell: {
        color: 'grey'
    }
});
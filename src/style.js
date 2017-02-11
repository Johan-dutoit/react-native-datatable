import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        minHeight: 35,
        flexDirection: 'row',
    },
    headerCell: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        height: 35,
        borderColor: 'black',
        borderWidth: 1,
        padding: 3
    }
});
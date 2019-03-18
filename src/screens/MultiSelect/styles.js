import React,{ StyleSheet } from 'react-native';
import colors from './../../utils/Colors';

const styles = StyleSheet.create({
    listItemStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.lightgray
    },
    boldTextStyle: {
        fontWeight: 'bold',
        fontSize: 14.5,
    },
    checkViewStyle: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    listTitleStyle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});

export default styles;
'use-strict';

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { borderColor } from '../constants/Colors';

export function expandedInfoDataComponent(label, data) {
    return (
        <View style={styles.dataComponentBox}>
            <Text style={styles.label}>
                {label}
            </Text>
            <Text style={styles.data}>
                {data}
            </Text>
        </View>);
}

const styles = StyleSheet.create({
    dataComponentBox: {
        flexDirection: 'row',
        alignContent: 'stretch',
        alignItems: 'stretch',
        alignSelf: 'center',
        marginTop: 15,
        width: 300,
    },
    label: {
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor: borderColor,
        borderWidth: 1,
        fontWeight: 'bold',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    data: {
        flex: 2.5,
        fontSize: 10,
        textAlign: 'left',
        alignItems: 'center',
        alignContent: 'center',
        borderColor: borderColor,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    }
});
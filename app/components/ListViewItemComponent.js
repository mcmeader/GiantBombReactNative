'use-strict';

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { placeholder } from '../constants/Constants.js';
import { bgColor_picture, bgColor_description, bgColor_name, borderColor, bgColor_releaseDate } from '../constants/Colors.js';

export function listViewItemLayout(imageUrl, name, description, releaseDate) {
    return (
        <View style={styles.resultsBox}>
            <View style={styles.imageBox} testID='imageBox'>
                <Image
                    style={styles.image}
                    source={
                        {
                            width: 75,
                            height: 75,
                            uri: imageUrl
                        }}
                    defaultSource={placeholder}
                    resizeMethod='resize'
                    resizeMode='center'
                />
            </View>
            <View style={styles.textBox}>
                <View style={styles.nameReleaseDateBox}>
                    <Text style={styles.name} testID='name'>{name}</Text>
                    <Text style={styles.releaseDate} testID='releaseDate'>{releaseDate}</Text>
                </View>
                <View style={styles.description} testID='descriptionBox'>
                    <Text testID='description'>{(description == null) || (description == '') || (description == undefined) ? 'No information available' : description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultsBox: {
        flex: 1,
        flexDirection: 'row',
        borderColor: borderColor,
        borderWidth: 1,
    },
    imageBox: {
        flex: 1,
        padding: 5,
        backgroundColor: bgColor_picture,
    },
    image: {
        flex: 1,
    },
    textBox: {
        flex: 3,
        borderColor: borderColor,
        borderLeftWidth: 1,
    },
    nameReleaseDateBox: {
        flexDirection: 'row',
        fontSize: 12,
        borderColor: borderColor,
        borderBottomWidth: 1,
    },
    name: {
        flex: 1,
        fontSize: 10,
        textAlign: 'center',
        borderColor: borderColor,
        borderRightWidth: 1,
        backgroundColor: bgColor_name
    },
    releaseDate: {
        flex: 3,
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'stretch',
        backgroundColor: bgColor_releaseDate,
    },
    description: {
        flex: 5,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor_description
    },
});
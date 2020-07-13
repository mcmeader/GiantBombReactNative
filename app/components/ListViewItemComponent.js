'use-strict';

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import * as Constants from '../constants/Constants.js';

export function listViewItemLayout(imageUrl, name, description, platform) {
    return (
        <View style={styles.resultsBoxStyle}>
            <Image
                style={styles.resultsPictureStyle}
                source={(imageUrl == Constants.placeholder) ? require('../assets/game_placeholder.png') :
                    {
                        width: 100,
                        height: 100,
                        uri: imageUrl
                    }}
                resizeMethod='resize'
                resizeMode='center'
            />
            <View style={styles.resultsDescriptionTextBoxStyle}>
                <View style={styles.resultsNamePlatformStyle}>
                    <Text style={styles.nameTextStyle} lineBreakMode=''>{name}</Text>
                    <Text style={styles.platformTextStyle}>{platform}</Text>
                </View>
                <View style={styles.descriptionTextBoxStyle}>
                    <Text allowFontScaling={true} numberOfLines={100}>{description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultsBoxStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        alignSelf: 'stretch',
        flex: 1,
    },
    resultsDescriptionTextBoxStyle: {
        flex: 5,
        alignContent: 'center',
        backgroundColor: 'lightgreen'
    },
    resultsNamePlatformStyle: {
        flexDirection: 'row',
        alignItems: 'stretch',
        fontSize: 12,
        alignContent: 'space-between',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
    },
    nameTextStyle: {
        flex: 1,
        fontSize: 10,
        textAlign: 'center',
        alignContent: 'space-between',
        borderColor: 'black',
        borderRightWidth: 1,
        backgroundColor: 'pink'
    },
    platformTextStyle: {
        flex: 3,
        fontSize: 10,
        textAlign: 'center',
        alignSelf: 'center',
    },
    resultsPictureStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'lightyellow'
    },
    descriptionTextBoxStyle: {
        flex: 1,
        textAlign: 'center',
        borderColor: 'black',
        borderLeftWidth: 1,
        alignContent: 'stretch',
        backgroundColor: 'skyblue'
    },
});
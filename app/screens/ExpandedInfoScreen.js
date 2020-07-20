'use-strict';

import React from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';

import { expandedInfoDataComponent } from '../components/ExpandedInfoDataComponent.js'

function _expectedReleaseDate(objectData) {
    let day = objectData.expected_release_day;
    let month = objectData.expected_release_month;
    let year = objectData.expected_release_year;
    return day + "/" + month + "/" + year;
}

export default function ExpandedInfoScreen(objectData) {
    objectData = objectData.route.params.objectData;
    return (
        <View style={styles.screenBox}>
            <View style={styles.imageBox}>
                <Image
                    style={styles.image}
                    source={
                        {
                            width: 300,
                            height: 300,
                            uri: objectData.image.super_url,
                        }
                    }
                    resizeMethod='scale'
                    resizeMode='stretch'
                    borderRadius={5}
                />
            </View>
            <View style={styles.textBox}>
                <View>
                    <View>
                        <Text style={styles.name}>
                            {objectData.name}
                        </Text>

                    </View>
                </View>
                <View style={styles.dataTable}>
                    <Text style={styles.description}>
                        {objectData.deck}
                    </Text>
                    {expandedInfoDataComponent("Aliases:", objectData.aliases)}
                    {expandedInfoDataComponent("Platforms:", objectData.platforms.map(platform => platform.name + '\n'))}
                    {expandedInfoDataComponent("Release Date:", (objectData.original_release_date === null) ? _expectedReleaseDate(objectData) : objectData.original_release_date)}
                </View>
                <View style={styles.lastUpdated}>
                    <Text style={StyleSheet.create({ fontSize: 10, })}>
                        Last Updated: {objectData.date_last_updated}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenBox: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: StatusBar.currentHeight,
    },
    imageBox: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        alignContent: 'stretch',
    },
    image: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        borderRadius: 100,
    },
    textBox: {
        flex: 1.5,
        alignItems: 'center',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
        width: 300,
    },
    description: {
        fontSize: 15,
        marginStart: 10,
        marginEnd: 10,
        width: 300,
        textAlign: 'center',
    },
    dataTable: {
        flex: 3,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },
    lastUpdated: {
        flex: 1,
        fontSize: 10,
        marginTop: 200,
        textAlignVertical: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
});

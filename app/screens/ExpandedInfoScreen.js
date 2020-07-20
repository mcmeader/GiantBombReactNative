'use-strict';

import React from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';

import { borderColor } from '../constants/Constants.js';
import { expandedInfoDataComponent } from '../components/ExpandedInfoDataComponent.js'

function _expectedReleaseDate(objectData) {
    let day = objectData.expected_release_day;
    let month = objectData.expected_release_month;
    let year = objectData.expected_release_year;
    return day + "/" + month + "/" + year;
}

export default function ExpandedInfoScreen() {
    const objectData = {
        name: "Mario & Luigi: Dream Team", aliases: "Mario & Luigi RPG 4: Dream Adventure\r\nマリオ&ルイージRPG4 ドリームアドベンチャー\r\nMario & Luigi: Dream Team Bros.\r\nMario and Luigi: Dream Team",
        platforms: [{
            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-117/",
            "id": 117,
            "name": "Nintendo 3DS",
            "site_detail_url": "https://www.giantbomb.com/nintendo-3ds/3045-117/",
            "abbreviation": "3DS"
        },
        {
            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-138/",
            "id": 138,
            "name": "Nintendo 3DS eShop",
            "site_detail_url": "https://www.giantbomb.com/nintendo-3ds-eshop/3045-138/",
            "abbreviation": "3DSE"
        }],
        deck: "The fourth entry in the Mario and Luigi RPG series has Mario traversing dreams within Luigi's mind. Players will have to interact with Luigi on the bottom screen to provoke certain events within his dreams.",
        original_release_date: null, expected_release_day: "1",
        expected_release_month: "2", expected_release_year: "1900", date_last_updated: "10/01/1900", image: { super_url: "https://giantbomb1.cbsistatic.com/uploads/scale_large/8/87790/2995038-box_maldt.png" }
    }

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

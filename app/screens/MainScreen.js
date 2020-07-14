'use-strict';

import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, TextInput, Button, FlatList, StatusBar } from 'react-native';

import { listViewItemLayout } from '../components/ListViewItemComponent.js';
import { url } from '../constants/Constants.js';
import { borderColor, bgColor_releaseDate } from '../constants/Colors.js';

export default function App() {
  const [editText, setEditText] = useState(''),
    [isLoading, setIsLoading] = useState(false),
    [flatListData, setFlatListData] = useState([]);

  return (
    <View style={styles.screenBox}>
      <View style={styles.searchResultsBox}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={flatListData}
            keyExtractor={(index) => index.guid}
            renderItem={({ item }) => (
              listViewItemLayout(item.image.super_url, item.name, item.deck, "Release Date: " + item.original_release_date))}
            initialNumToRender={100}
          />
        )}
      </View>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          defaultValue={editText}
          placeholder='Search'
          onChangeText={text => setEditText(text)}
        />
        <View style={styles.searchButton}>
          <Button
            title="Submit"
            color={bgColor_releaseDate}
            onPress={() => {
              setIsLoading(true);
              fetch(url + editText)
                .then((response) => response.json())
                .then((body) => { return body.results })
                .then((data) => setFlatListData(data))
                .finally(() => setIsLoading(false))
                .catch((error) => console.log(error))
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenBox: {
    flex: 1,
    marginStart: 5,
    marginEnd: 5,
    marginBottom: 5,
    marginTop: StatusBar.currentHeight,
  },
  searchResultsBox: {
    flex: 16,
    alignItems: 'stretch',
  },
  searchBox: {
    flex: 1,
    fontSize: 100,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 4,
    textAlign: 'center',
    alignSelf: 'stretch',
    borderColor: borderColor,
    borderWidth: 1,
  },
  searchButton: {
    flex: 1,
    alignSelf: 'center',
  },
});

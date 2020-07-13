'use-strict';

import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View, TextInput, Button, FlatList, StatusBar } from 'react-native';

import { listViewItemLayout } from '../components/ListViewItemComponent.js';
import { placeholder, url } from '../constants/Constants.js';

export default function App() {
  const [editText, setEditText] = useState(''),
    [isLoading, setIsLoading] = useState(false),
    [flatListData, setFlatListData] = useState([]);

  return (
    <View style={styles.screenContainerStyle}>
      <View style={styles.searchResultsContainerStyle}>
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
      <View style={styles.searchViewContainerStyle}>
        <TextInput
          style={styles.textInputStyle}
          defaultValue={editText}
          placeholder='Search'
          onChangeText={text => setEditText(text)}
        />
        <Button
          title="Submit"
          color="red"
          onPress={() => {
            setIsLoading(true);
            fetch(url + editText)
              .then((response) => response.json())
              .then((body) => { return body.results })
              .then((data) => setFlatListData(data))
              .finally(() => setIsLoading(false))
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainerStyle: {
    flex: 1,
    margin: StatusBar.currentHeight || 0,
  },
  searchViewContainerStyle: {
    flex: 1,
    fontSize: 30,
    flexDirection: 'row',
    textAlignVertical: 'top',
    alignItems: 'center',
  },
  textInputStyle: {
    flex: 5,
    textAlign: 'center',
    borderColor: 'black',
    flexWrap: 'wrap',
    borderWidth: 0.5,
  },
  searchResultsContainerStyle: {
    flex: 16,
    alignContent: 'space-between',
  },
});

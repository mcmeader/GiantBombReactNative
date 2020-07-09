'use-strict';

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, StatusBar, Image, Dimensions } from 'react-native';
import getResults from '../services/SearchService';

const placeholder = '../assets/game_placeholder.png';

function _listViewItemLayout(imageUrl, name, description, platform) {
  return (
    <View style={styles.resultsBoxStyle}>
      <Image style={styles.resultsPictureStyle} source=
        {require(placeholder)}
        loadingIndicatorSource={require(placeholder)}
        resizeMethod='resize'
        resizeMode='center'
      />
      <View style={styles.resultsTextBoxStyle}>
        <View style={styles.resultsNamePlatformStyle}>
          <Text style={styles.nameTextStyle}>{name}</Text>
          <Text style={styles.platformTextStyle}>{platform}</Text>
        </View>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [editText, setEditText] = useState(''),
    [listViewData, setListViewData] = useState([
      { imageUrl: '../assets/game_placeholder.png', name: 'Name', description: 'Description', platform: 'Platform' }]);

  return (
    <View style={styles.screenContainerStyle}>
      <View style={styles.searchResultsContainerStyle}>
        <FlatList
          data={listViewData}
          renderItem={({ item }) => (
            _listViewItemLayout(item.imageUrl, item.name, item.description, item.platform))}
          keyExtractor={(item) => item.name}
        />
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
            getResults(editText);
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
    alignContent: 'center',
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
    justifyContent: 'center',
  },
  resultsPictureStyle: {
    flex: 1
  },
  resultsBoxStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  resultsTextBoxStyle: {
    flex: 5,
    backgroundColor: 'red',
  },
  resultsNamePlatformStyle: {
    flexDirection: 'row',
    alignItems: 'baseline',
    fontSize: 12,
  },
  nameTextStyle: {
    flex: 1,
    backgroundColor: 'blue',
  },
  platformTextStyle: {
    flex: 3,
    backgroundColor: 'green',
    alignContent: 'flex-end'
  }
});

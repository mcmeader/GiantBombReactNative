'use-strict';

import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, TextInput, Button, FlatList, Text, StatusBar, Image, Dimensions } from 'react-native';
import getResults from '../services/SearchService';

const placeholder = '../screens/game_placeholder.png';
const apiKey = '4aa162f5448bde1772c4778bd8d966811da0124c',
  resources = 'game',
  format = 'JSON',
  limit = '',
  url =
    'https://www.giantbomb.com/api/search/?api_key=' +
    apiKey +
    '&resources=' +
    resources +
    '&format=' +
    format +
    '&limit=' +
    limit +
    '&query=';
function _listViewItemLayout(imageUrl, name, description, platform) {
  return (
    <View style={styles.resultsBoxStyle}>
      <Image style={styles.resultsPictureStyle} source=
        {require(placeholder)}
        loadingIndicatorSource={require(placeholder)}
        resizeMethod='resize'
        resizeMode='center'
      />
      <View style={styles.resultsDescriptionTextBoxStyle}>
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
  const listViewDataObject = { imageUrl: placeholder, name: "name", description: "description", platform: "platform", id: 1 };
  const [editText, setEditText] = useState(''),
    [listViewData, setListViewData] = useState([listViewDataObject]),
    [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.screenContainerStyle}>
      <View style={styles.searchResultsContainerStyle}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={listViewData}
            renderItem={({ item }) => (
              _listViewItemLayout(item.imageUrl, item.name, item.description, item.platform))}
            keyExtractor={(item) => item.id}
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
              .then((data) => {
                let abc = listViewDataObject;
                let def;
                for (const obj of data.results) {
                  abc.imageUrl = placeholder;
                  abc.id = obj.guid;
                  abc.name = obj.name;
                  abc.description = obj.deck;
                  abc.platform = "";
                  def += abc;
                }
                setListViewData(def);
              })
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
    flex: 1,
  },
  resultsBoxStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
  },
  resultsDescriptionTextBoxStyle: {
    flex: 5,
    backgroundColor: 'green',
  },
  resultsNamePlatformStyle: {
    flexDirection: 'row',
    alignItems: 'baseline',
    fontSize: 12,
  },
  nameTextStyle: {
    flex: 1,
    fontSize: 10,
    backgroundColor: 'yellow',
  },
  platformTextStyle: {
    flex: 3,
    fontSize: 10,
    alignContent: 'flex-end',
    backgroundColor: 'red',
  }
});

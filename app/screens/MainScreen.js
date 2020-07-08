'use-strict';

import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, View, TextInput, Button } from 'react-native';
import getResults from '../services/RetrieveResultService';
var _defaultEditText = 'Search';
export default function App() {
  return (
    <View style={styles.screenContainerStyle}>
      <View style={styles.searchViewContainerStyle}>
        <TextInput
          style={styles.textInputStyle}
          defaultValue={_defaultEditText}
          multiline={true}
          onChangeText={(Text) => (_defaultEditText = Text)}
        />
        <Button
          title="Submit"
          color="red"
          onPress={() => {
            getResults(_defaultEditText);
          }}
        />
      </View>
      <View style={styles.searchResultsContainerStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainerStyle: {
    flex: 1,
    marginTop: 30,
    marginEnd: 5,
    marginStart: 5,
  },
  searchViewContainerStyle: {
    flex: 1,
    fontSize: 10,
    flexDirection: 'row',
    textAlignVertical: 'top',
  },
  textInputStyle: {
    flex: 5,
    fontSize: 12,
    textAlign: 'center',
    borderColor: 'black',
    flexWrap: 'wrap',
    borderWidth: 0.5,
  },
  searchResultsContainerStyle: {
    flex: 16,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  resultsBoxStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

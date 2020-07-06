import React from 'react';
// eslint-disable-next-line prettier/prettier
import { SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  <SafeAreaView>
    <View style={styles.searchViewContainerStyle}>
      <TextInput defaultValue="Search" />
      <Button
        style={styles.searchButtonStyle}
        onPress={() => {
          console.log('Clicked');
        }}>
        Search
      </Button>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  searchViewContainerStyle: {
    fontSize: 10,
    flex: 1,
    flexDirection: 'row',
  },
  searchButtonStyle: {
    fontSize: 15,
    color: 'blue',
  },
  searchResultsContainerStyle: {
    flex: 5,
    justifyContent: 'center',
  },
  resultsBoxStyle: {
    justifyContent: 'center',
  },
});

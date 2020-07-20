import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './app/screens/MainScreen';
import ExpandedInfoScreen from './app/screens/ExpandedInfoScreen';

const Stack = createStackNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainScreen'>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="ExpandedInfo" component={ExpandedInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

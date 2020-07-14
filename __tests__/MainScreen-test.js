/**
 * @format
 */

import 'react-native';
import React from 'react';

import MainScreen from '../app/screens/MainScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('Main screen renders properly', () => {
    renderer.create(<MainScreen />);
});


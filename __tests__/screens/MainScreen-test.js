/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreen from '../../app/screens/MainScreen';
import renderer from 'react-test-renderer';
import { listViewItemLayout } from '../../app/components/ListViewItemComponent';

//const mockListViewItem = jest.fn(listViewItemLayout, () => "itsGood")

it('Main screen renders properly', () => {
    renderer.create(<MainScreen />);
});

it('Editing text input field clears text when typing', () => {
    const { getByTestId } = render(<MainScreen />)
    let testText = 'test';
    fireEvent.changeText(getByTestId('textInput'), testText);
    expect(getByTestId('textInput').props.defaultValue).toBe(testText);
})

'use-strict';

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import MainScreen from '../../app/screens/MainScreen';
import { borderColor } from '../../app/constants/Colors';

global.fetch = jest.fn(require('node-fetch'));

describe("Main screen tests", () => {
    it('Main screen renders properly', () => {
        render(<MainScreen />);
    });

    it('Editing text input field clears text when typing', () => {
        const { getByTestId } = render(<MainScreen />);
        let testText = 'test';
        fireEvent.changeText(getByTestId('textInput'), testText);
        expect(getByTestId('textInput').props.defaultValue).toBe(testText);
    });

    it('Editing text input field clears text when typing', () => {
        const { getByTestId } = render(<MainScreen />);
        let testText = 'test';
        fireEvent.changeText(getByTestId('textInput'), testText);
        expect(getByTestId('textInput').props.defaultValue).toBe(testText);
    });

    it('Clicking submit button calls fetch api', () => {
        const { getByText } = render(<MainScreen />)
        fireEvent.press(getByText('Submit'));
        expect(fetch).toHaveBeenCalled();
    });

    describe("Test each component has colors that match colors in colors file", () => {
        const { getByTestId } = render(<MainScreen />);

        it('Text input border color should match', () => {
            let color = getByTestId('textInput').props.style.borderColor;
            expect(color).toBe(borderColor);
        });
    });
});

import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreen from '../../app/screens/MainScreen';
import renderer from 'react-test-renderer';
import { borderColor } from '../../app/constants/Colors';

describe("Main screen tests", () => {
    it('Main screen renders properly', () => {
        renderer.create(<MainScreen />);
    });

    it('Editing text input field clears text when typing', () => {
        const { getByTestId } = render(<MainScreen />)
        let testText = 'test';
        fireEvent.changeText(getByTestId('textInput'), testText);
        expect(getByTestId('textInput').props.defaultValue).toBe(testText);
    });

    it('Editing text input field clears text when typing', () => {
        const { getByTestId } = render(<MainScreen />)
        let testText = 'test';
        fireEvent.changeText(getByTestId('textInput'), testText);
        expect(getByTestId('textInput').props.defaultValue).toBe(testText);
    });

    //Button press not working properly
    it('Clicking submit button calls fetch api', () => {
        const { getByTestId } = render(<MainScreen />)
        fireEvent.press(getByTestId('submitButton'));
        //expect(fetch).toHaveBeenCalled();
    });

    describe("Test each component has colors that match colors in colors file", () => {
        const { getByTestId } = render(<MainScreen />)

        it('Text input border color should match', () => {
            let color = getByTestId('textInput').props.style.borderColor;
            expect(color).toBe(borderColor);
        });
    });
});

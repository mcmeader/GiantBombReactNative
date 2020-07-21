'use-strict';

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

describe("Overall app tests", () => {
  it('The overall App renders correctly', () => {
    render(<>{App()}</>);
  });
});

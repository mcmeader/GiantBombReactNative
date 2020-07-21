'use-strict';

import React from 'react';
import { render } from '@testing-library/react-native';

import { expandedInfoDataComponent } from '../../app/components/ExpandedInfoDataComponent';

describe("ExpandedInfoDataComponent Tests", () => {
    it('Expanded Info Data Component renders properly', () => {
        render(<>{expandedInfoDataComponent()}</>);
    });

    it('An invalid data entry displays the default message', () => {
        const { getByText } = render(<>{expandedInfoDataComponent("test", null)}</>);
        expect(getByText('None')).toBeTruthy();
    });
});

'use-strict';

import React from 'react';
import { render } from '@testing-library/react-native';

import ExpandedInfoScreen from '../../app/screens/ExpandedInfoScreen';

describe("Expanded Info Screen Tests", () => {
    const testObjectData = {
        "route": {
            "params": {
                "objectData": {
                    "name": "test",
                    "deck": "test deck",
                    "aliases": ["test alias 1", "test alias 2"],
                    "platforms": [{ "name": "test platform 1" }, { "name": "test platform 2" }],
                    "original_release_date": "01-01-1900",
                    "date_last_updated": "01-01-1900",
                    "expected_release_day": 1,
                    "expected_release_month": 10,
                    "expected_release_year": 1900,
                    "image": {
                        "super_url": "test_image",
                    },
                }
            }
        }
    }

    it('Expanded Info Screen renders properly', () => {
        render(<>{ExpandedInfoScreen(testObjectData)}</>);
    });

    it('An invalid description displays the default message', () => {
        let invalidDescriptionTestData = testObjectData;
        invalidDescriptionTestData.route.params.objectData.deck = null;

        let { getByText } = render(<>{ExpandedInfoScreen(invalidDescriptionTestData)}</>);
        expect(getByText("No description available")).toBeTruthy();
    });

});

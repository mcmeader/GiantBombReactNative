'use-strict';

import React from 'react';
import { render } from '@testing-library/react-native';

import ExpandedInfoScreen from '../../app/screens/ExpandedInfoScreen';
import { expandedInfoDataComponent } from '../../app/components/ExpandedInfoDataComponent';

describe("Expanded Info Screen Tests", () => {
    const testObjectData = {
        "route": {
            "params": {
                "objectData": {
                    "name": "test",
                    "deck": "test deck",
                    "aliases": ["test alias 1", "test alias 2"],
                    "platforms": [{ "name": "test platform 1" }, { "name": "test platform 2" }],
                    "original_release_date": "02-03-1234",
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

    it('A release date in the future displays the properly formatted date', () => {
        const expandedInfoDataComponentMock = jest.fn(require(expandedInfoDataComponent))

        let invalidOriginalReleaseDate = testObjectData;
        invalidOriginalReleaseDate.route.params.original_release_date = null;

        render(<>{ExpandedInfoScreen(invalidOriginalReleaseDate)}</>);
        expect(expandedInfoDataComponentMock).toHaveBeenCalledWith("01-01-1900");
    });
});

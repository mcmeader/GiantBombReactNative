'use-strict';

import React from 'react';
import { render } from '@testing-library/react-native';

import ExpandedInfoScreen from '../../app/screens/ExpandedInfoScreen';
import { expandedInfoDataComponent } from '../../app/components/ExpandedInfoDataComponent';

jest.mock('../../app/components/ExpandedInfoDataComponent')

beforeEach(() => {
    expandedInfoDataComponent.mockClear();
})

describe("Expanded Info Screen Tests", () => {
    const testObjectData = {
        "route": {
            "params": {
                "objectData": {
                    "name": "test",
                    "deck": "test deck",
                    "aliases": ["test alias 1", "test alias 2"],
                    "platforms": [{ "name": "test platform 1" }, { "name": "test platform 2" }],
                    "original_release_date": "1234-05-06",
                    "date_last_updated": "9876-05-04 12:13:27",
                    "expected_release_day": "10",
                    "expected_release_month": "01",
                    "expected_release_year": "1900",
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

    it('Release date is in the format mm-dd-yyyy', () => {
        render(<>{ExpandedInfoScreen(testObjectData)}</>);
        expect(expandedInfoDataComponent).toHaveBeenCalledWith("Release Date:", "05/06/1234");
    });

    it('Last updated date is in the format mm-dd-yyyy', () => {
        let { getByText } = render(<>{ExpandedInfoScreen(testObjectData)}</>);
        expect(getByText("Last Updated: 05/04/9876")).toBeTruthy();
    });

    it('A release date in the future displays the properly formatted date', () => {
        const invalidOriginalReleaseDate = JSON.parse(JSON.stringify(testObjectData));
        invalidOriginalReleaseDate.route.params.objectData.original_release_date = null;
        console.log(testObjectData.route.params.objectData);
        render(<>{ExpandedInfoScreen(invalidOriginalReleaseDate)}</>);
        expect(expandedInfoDataComponent).toHaveBeenCalledWith("Release Date:", "01/10/1900");
    });

    it('An invalid description displays the default message', () => {
        const invalidDescriptionTestData = JSON.parse(JSON.stringify(testObjectData));
        invalidDescriptionTestData.route.params.objectData.deck = null;
        console.log(testObjectData.route.params.objectData);
        let { getByText } = render(<>{ExpandedInfoScreen(invalidDescriptionTestData)}</>);
        expect(getByText("No description available")).toBeTruthy();
    });

    it('Invalid platforms returns default value', () => {
        const invalidPlatforms = JSON.parse(JSON.stringify(testObjectData));
        invalidPlatforms.route.params.objectData.platforms = null;
        console.log(testObjectData.route.params.objectData);
        render(<>{ExpandedInfoScreen(invalidPlatforms)}</>);
        expect(expandedInfoDataComponent).toHaveBeenCalledWith("Platforms:", "None");
    });
});

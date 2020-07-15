import 'react-native';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import { listViewItemLayout } from '../../app/components/ListViewItemComponent.js';
import { placeholder } from '../../app/constants/Constants.js';
import { bgColor_picture, bgColor_releaseDate, bgColor_description, bgColor_name, borderColor } from '../../app/constants/Colors';

describe("Component Tests for ListViewItem", () => {
    it('Component renders properly', () => {
        renderer.create(listViewItemLayout(placeholder, "abc", "abc", "abc"));
    });

    it('If description is missing, it is filled in automatically', () => {
        const { getByTestId } = render(listViewItemLayout(placeholder, "abc", null, "def"))
        let descriptionValue = getByTestId('description').props.children;
        expect(descriptionValue).toBe('No information available');
    });

    describe('Test each component has colors that match colors in colors file', () => {
        const { getByTestId } = render(listViewItemLayout(placeholder, "abc", "abc", "abc"))

        it('Image box colors match', () => {
            var color = getByTestId('imageBox').props.style.backgroundColor;
            expect(color).toBe(bgColor_picture);
        });

        it('Name box colors match', () => {
            var color = getByTestId('name').props.style.backgroundColor;
            var colorBorder = getByTestId('name').props.style.borderColor;
            expect(color).toBe(bgColor_name);
            expect(colorBorder).toBe(borderColor);
        });

        it('Release date box colors match', () => {
            var color = getByTestId('releaseDate').props.style.backgroundColor;
            expect(color).toBe(bgColor_releaseDate);
        });

        it('Description box colors match', () => {
            var color = getByTestId('descriptionBox').props.style.backgroundColor;
            expect(color).toBe(bgColor_description);
        });
    })
});

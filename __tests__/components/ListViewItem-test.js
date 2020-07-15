
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { listViewItemLayout } from '../../app/components/ListViewItemComponent';

it('Component renders properly', () => {
    renderer.create(<listViewItemLayout />);
});

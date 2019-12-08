import React from 'react';
import renderer from 'react-test-renderer';
import Btn from './index';

test('Render btn', () => {
  const component = renderer.create(
    <Btn>Content</Btn>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

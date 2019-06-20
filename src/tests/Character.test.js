import React from 'react';
import { shallow } from 'enzyme';
import Character from '../components/characters/Character';

describe('Character component', () => {
  it('Render a character', () => {
    const wrapper = shallow(<Character character="hello" />);
    expect(wrapper).toMatchSnapshot();
  });
});

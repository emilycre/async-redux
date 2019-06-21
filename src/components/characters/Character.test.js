import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('Renders a character', () => {
    const wrapper = shallow(<Character character={{ id: '0001', name: 'Appa', img: '/img' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Charactersss component', () => {
  it('Renders characters', () => {
    const wrapper = shallow(<Characters characters={[{ id: '0001', name: 'Appa', img: '/img' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

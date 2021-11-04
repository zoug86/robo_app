import { shallow, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render card component', () => {
    //const wrapper = shallow(<Card />);
    expect(render(<Card />)).toMatchSnapshot();
})

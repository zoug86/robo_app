import { render } from 'enzyme';
import React from 'react';
import Home from './Home';

describe('testing Home component', () => {
    it('should render Home component', () => {
        const wrapper = render(<Home />);
        expect(wrapper).toMatchSnapshot();
    });
})

// it('expect to render card component', () => {
//     //const wrapper = shallow(<Card />);
//     expect(render(<Card />)).toMatchSnapshot();
// })

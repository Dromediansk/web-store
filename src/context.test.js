import { shallow } from 'enzyme';
import React from 'react';
import ProductProvider from './ProductProvider';

it('expect to render ProductProvider component', () => {
    expect(shallow(<ProductProvider />)).toMatchSnapshot();
})
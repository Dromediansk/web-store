import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from './LandingPage';

it('expect to render LandingPage component', () => {
    expect(shallow(<LandingPage />)).toMatchSnapshot();
})
import React from 'react';
import {shallow} from 'enzyme';
import ProductList from '../ProductList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe("ProductList", () => {
    it('Shows a loading bar when is loading', () => {
        const props = {
            loading: true,
            products: []
        }
        
        const wrapper = shallow(<ProductList {... props} />)

        expect(wrapper.find('.loading').length).toEqual(1)
    })
})
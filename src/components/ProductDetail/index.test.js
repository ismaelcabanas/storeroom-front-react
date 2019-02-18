import React from 'react';
import {shallow} from 'enzyme';
import ProductDetail from '.';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe("ProductDetail", () => {
    it('Shows product name', () => {
        const props = {
            product: {
                name: "Manzana"
            }
        }
        
        const wrapper = shallow(<ProductDetail {... props} />)

        expect(wrapper.find('.name').text()).toEqual('Manzana')
    })

    it('Shows product stock', () => {
        const props = {
            product: {
                name: "Manzana",
                stock: 5
            }
        }
        
        const wrapper = shallow(<ProductDetail {... props} />)

        expect(wrapper.find('.stock').text()).toEqual('5')
    })

})
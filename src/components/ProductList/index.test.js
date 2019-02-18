import React from 'react';
import {shallow} from 'enzyme';
import ProductList from '.';
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

    it("Shows a error bar when error happens", () => {
        const props = {
            error: {
                "message": "Something went wrong"
            },
            products: []
        }

        const wrapper = shallow(<ProductList {... props} />)

        expect(wrapper.find('.error').length).toEqual(1)
    })

    it("Shows a list of products", () => {
        const props = {
            products: [
                {"id": "6ee88e09-8b8a-44c4-b8b3-9ba8e759284d", "name": "Manzana", "storeroomId": "dc3143d7-7731-4532-a5e6-b35e7149350f"},
                {"id": "56259dc5-c7b4-4489-a9dd-7cf56c1134e6", "name": "Leche", "storeroomId": "dc3143d7-7731-4532-a5e6-b35e7149350f"}
            ]
        }

        const wrapper = shallow(<ProductList {... props} />)

        expect(wrapper.find('.product .title').length).toEqual(2)
    })
})
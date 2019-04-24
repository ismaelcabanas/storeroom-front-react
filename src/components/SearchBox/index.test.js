import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from '.';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe("SearchBox", () => {
    it('Show search box', () => {
        const props = {
            
        }
        
        const wrapper = shallow(<SearchBox {... props} />)

        expect(wrapper.find('.search').length).toEqual(1)
    })    

    it('Handle searching', () => {
        const onChange = jest.fn() // to create a spy object that can record the trace invocations
        const props = {
            term: 'Manz',
            onChange            
        }        
        const wrapper = shallow(<SearchBox {... props} />)

        wrapper.simulate('change', 'Manz') // simulate the onChange event with 'Manz' payload

        expect(onChange).toHaveBeenCalled()
        expect(onChange).toHaveBeenCalledWith('Manz')
    })
})
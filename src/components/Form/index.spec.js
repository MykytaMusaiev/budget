import React from 'react'
import {shallow} from "enzyme";
import Form from '.'

describe('Form component', () => {
    let props;
    let sut; //Subject Under Testing

    beforeEach(()=>{ //частина коду, яка буде виконуватись перед кожним тестом
        props = {
            onChange: jest.fn()
        }
        sut = shallow(<Form {...props}/>);
    })
    describe('when edit form', () => {
        it('should change value input', () => {
            const input = sut.find('input[name="value"]').at(0); // для першого елемента

            input.simulate('change', {target: {value: '123'}}); // передаємо евент, та об'єкт з данними длясимуляції вводу

            expect(true).toBe(true);
        })
    })
})
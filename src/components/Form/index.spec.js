import React from 'react'
import {shallow} from "enzyme";
import Form from '.'

describe('Form component', () => {
    let props;
    let sut; //Subject Under Testing

    beforeEach(() => {
        jest
            .spyOn(global, 'Date')
            .mockImplementation(() => ({
                toISOString: () => '2023-01-01T21:19:31.107Z'
            }))
    })

    beforeEach(() => { //частина коду, яка буде виконуватись перед кожним тестом
        props = {
            onChange: jest.fn()
        }
        sut = shallow(<Form {...props}/>);

    })
    describe('when edit form', () => {
        it('should change value input', () => {
            let input = sut.find('Input[name="value"]').at(0); // для першого елемента

            input.simulate('change', {
                target: {
                    value: '123',
                    name: 'value'
                }
            }); // передаємо евент, та об'єкт з данними длясимуляції вводу
            sut.update();
            input = sut.find('Input[name="value"]').at(0); // для першого елемента

            const props = input.props();

            expect(props.value).toBe('123');
        })

        it('should change comment input', () => {
            const expectedResult = 'comment text';
            let input = sut.find('Comment[name="comment"]').at(0); // для першого елемента

            input.simulate('change', {
                target: {
                    value: 'comment text',
                    name: 'comment'
                }
            }); // передаємо евент, та об'єкт з данними длясимуляції вводу
            sut.update();
            input = sut.find('Comment[name="comment"]').at(0); // для першого елемента

            const {value} = input.props();

            expect(value).toBe(expectedResult);
        })
    })

    describe('when user submit fort', () => {
        it('should call onChange from props', () => {
            const form = sut.find('form');
            form.simulate('submit', {
                preventDefault: jest.fn()
            });

            expect(props.onChange).toHaveBeenCalledTimes(1);
        })

        it('should send form data', () => {
            let input = sut.find('Input[name="value"]').at(0);

            input.simulate('change', {
                target: {
                    value: '123',
                    name: 'value'
                }
            })

            input = sut.find('Comment[name="comment"]').at(0);

            input.simulate('change', {
                target: {
                    value: 'comment value',
                    name: 'comment'
                }
            });

            sut.update(); // генерує новий інстанс

            const form = sut.find('form');

            form.simulate('submit', {
                preventDefault: jest.fn()
            })
        })

        // it('clear form on submit', () => {
        //     const form = sut.find('form');
        //     form.simulate('submit');
        //
        //     let input = sut.find('Input[name="value"]').at(0);
        //     expect(input.value).toBe('');
        //
        //     input = sut.find('Comment[name="comment"]').at(0);
        //     expect(input.value).toBe('');
        // })
    })
})
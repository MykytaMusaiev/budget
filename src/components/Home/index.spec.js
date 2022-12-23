// import React from "react";
// import { mount } from "enzyme";
// import Home from ".";
//
// import {getItems, addItem} from "../../utils/indexdb";
//
// jest.mock('../../utils/indexdb',()=>{
//     getItems: jest.fn(),
//     addItem: jest.fn()
// })
//
// describe('Home component', () => {
//     let sut;
//     let props;
//
//     beforeEach(()=>{
//         sut=mount(<Home {...props}/>);
//     })
//
//     describe('when component is mounted',()=>{
//         it('should set balance value to 0', ()=>{
//             const { balance } = sut.find('Balance').at(0).props();
//             expect(balance).toBe(0);
//         })
//     })
// })

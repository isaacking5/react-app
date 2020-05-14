// import React from "react";
// import { render, fireEvent } from "@testing-library/react";

// import HiddenMessage from ".";

// describe("HiddenMessage component", () => {
//   it("shows the children when the checkbox is checked", () => {
//     const testMessage = "Test Message";
//     const { queryByText, getByLabelText, getByText } = render(
//       <HiddenMessage>{testMessage}</HiddenMessage>
//     );
//     // query* functions will return the element or null if it cannot be found
//     // get* functions will return the element or throw an error if it cannot be found
//     expect(queryByText(testMessage)).toBeNull();
//     // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
//     fireEvent.click(getByLabelText(/show/i));
//     // .toBeInTheDocument() is an assertion that comes from jest-dom
//     // otherwise you could use .toBeDefined()
//     expect(getByText(testMessage)).toBeInTheDocument();
//   });
// });




                    // functional component unit test

import {Add, AddItemsToList, RemoveItemsToList, UpdateItemsToList} from './index'

describe("add tests", ()=>{
    test("should return sum of two numbers", ()=>{
        expect(Add(1,2)).toBe(3);
        expect(Add(2,-2)).toBe(0);
    })
})

describe("add list test", ()=>{
    test("add items to list", ()=>{
        let listOfItems = ['react','mobX']
        let result = AddItemsToList(listOfItems,'jest')
        let expected = ['react','mobX','jest']
        expect(result).toEqual(expected)
    })
})

describe("remove item test", ()=>{
    it("remove items from list", ()=>{
        let listOfItems = ['react','mobX']
        let result = RemoveItemsToList(listOfItems,1)
        let expected = ['react']
        expect(result).toEqual(expected)
    })
})

describe("update item test", ()=>{
    it("update items in list", ()=>{
        let listOfItems = ['react','mobX']
        let result = UpdateItemsToList(listOfItems,1, 'jest')
        let expected = ['react', 'jest']
        expect(result).toEqual(expected)
    })
})
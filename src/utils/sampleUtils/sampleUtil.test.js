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
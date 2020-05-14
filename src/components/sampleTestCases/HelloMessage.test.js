import React , {Component} from "react"
import {render} from "@testing-library/react"

import {HelloMessage} from './index'
describe("Hello Message Test", ()=>{
    it("should render given message", ()=>{
        const {getByText, debug} = render(<HelloMessage message="world" />);
        getByText(/world/i);

        debug();

        //expect(queryByText(/world/i).length(1))
    })
})
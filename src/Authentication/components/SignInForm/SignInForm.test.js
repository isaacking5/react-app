import React from 'react'
import { render } from "@testing-library/react";
import LoginPage from './index'
describe("SignIn Form test cases", ()=>{
    it("Should render typed username",()=>{
        const username = "isaac"
        const {getByPlaceholderText} = render(
            <LoginPage username = {username} onUsernameChange={() => {}}/>
        );

        const usernameField = getByPlaceholderText("Username");
        expect(usernameField.value).toBe(username);
    })

    it("Should render typed password",()=>{
        const password = "isaac123"
        const {getByPlaceholderText} = render(
            <LoginPage password = {password} onPasswordChange={() => {}}/>
        )

        const passwordField = getByPlaceholderText("Password");
        expect(passwordField.value).toBe(password)
    })

    it("Should render given error message", ()=>{
        const errorMessage="invalid Values"
        const {getByText} = render(
            <LoginPage errorMessage = {errorMessage} />
        )

        getByText(/invalid Values/i);
    });
});
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const LoginButton = styled.button`
    ${tw`bg-gray-900 text-gray-100 m-2 p-2 rounded-md flex justify-center`}
`

const LoginForm = styled.form`
    ${tw`flex flex-col bg-white p-10 rounded-md`}
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
`

const LoginPAGE = styled.div`
    ${tw`flex h-screen justify-center items-center bg-gray-200`}
`

const UsernameField = styled.input`
    ${tw`m-2 mt-10 p-2 border border-gray-400 rounded-md`}
 `
const PasswordField = styled.input`
    ${tw`m-2 p-2 border border-gray-400 rounded-md`}
`

const SignInHeading = styled.p`
    ${tw`text-2xl font-bold`}
`

const ErrorMesage = styled.span`
    ${tw`ml-2 text-red-700 text-sm`}
`

 export {LoginButton, LoginForm, LoginPAGE, UsernameField, PasswordField, SignInHeading, ErrorMesage}
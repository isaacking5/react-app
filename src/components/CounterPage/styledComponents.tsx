import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CounterContainer = styled.div`
    ${tw`h-screen flex justify-center items-center flex-col`}
`

const CounterInputTag = styled.input`
    ${tw`text-xl border border-red-300 p-2 w-40 h-16 text-center rounded`}
`

const MainHeding = styled.h1`
    ${tw`text-6xl font-bold pb-8`}
`
const Button = styled.button`
    ${tw`w-16 h-16 text-center bg-blue-700 rounded mr-6 ml-6`}
`
 export {CounterContainer, CounterInputTag, MainHeding, Button}
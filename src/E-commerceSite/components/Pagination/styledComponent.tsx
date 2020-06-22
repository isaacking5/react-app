import React from 'react'
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

export const PaginationBlock = styled.div`
    ${tw`flex fixed bottom-0 right-0 mr-2 items-center`}
`

export const ArrowPagination = styled.button`
    ${tw`border border-gray-600 focus:outline-none bg-gray-900 text-white w-8 h-8 m-2 flex justify-center items-center pb-1 text-2xl font-bold`}
    
`

export const CurrentPage = styled.span`
    ${tw`border border-gray-600 w-8 h-8 text-center text-xl font-bold`}
`

export const BySymbol = styled.span`
    ${tw` w-8 h-8 text-center text-2xl -mt-2 font-bold`}
`

export const TotalPage = styled.span`
    ${tw`-ml-2`}
`
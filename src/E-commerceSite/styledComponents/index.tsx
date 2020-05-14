import styled from '@emotion/styled';
import tw from 'tailwind.macro';

export const SignOutButton = styled.button`
    ${tw`bg-gray-900 text-gray-100 m-2 p-2 rounded-md flex justify-center`}
`

export const CartIcon = styled.div`
   ${tw`w-16 h-16 p-2 -mx-16  z-10 cursor-pointer border text-gray-100  rounded-lg bg-gray-900 fixed`}
   box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
`
export const SizeSelectedBlock = styled.div`
    ${tw`w-3/12`}
 `
 export const SizeFixedBlock = styled.div`
   ${tw`fixed w-3/12`}
 `

 export const ProductDisplayContainer = styled.div`
    ${tw`flex`}
 `

 export  const ListOfProductsBlock = styled.div`
    ${tw`flex flex-wrap mt-4`}
 `

 export const EachProductBlock = styled.div`
    ${tw`flex flex-col items-center relative`}
 `

 export const FreeDelivery = styled.img`
   ${tw`absolute w-16 top-0 right-0`}
 `
 export const ImgBlock = styled.img`
    ${tw`w-40 m-6`}
 `

 export  const EachList = styled.li`
    ${tw`list-none mb-4 m-2 rounded`}
    box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
 `

 export const Sizes = styled.p`
    ${tw`text-2xl font-semibold m-6`}
 `

 export const SelectSize = styled.div`
    ${tw`flex flex-wrap m-4`}
 `
type SizeOptionsProps = {
   bgColor:boolean
}
 export  const SizeOptions = styled.div`
    ${tw`w-12 h-12 rounded-full m-2 flex items-center justify-center cursor-pointer`}
    background-color:${(props:SizeOptionsProps)=> props.bgColor ?"#1a202c":"#e2e8f0"};
    color:${(props:SizeOptionsProps) => props.bgColor ?"white":"black"}
 `

 export const HorzontalLine = styled.hr`
    ${tw`w-6 h-1 bg-orange-600 mt-2 mb-2 rounded-lg`}
`
 
export const Price = styled.span`
    ${tw``}
`
export const OnlyPrice = styled.span`
    ${tw`text-2xl font-medium`}
`
export const Installment = styled.span`
    ${tw`text-gray-600`}
`

export const AddToCartButton = styled.button`
    ${tw`bg-black text-gray-100 m-3 p-2 pr-12 pl-12 rounded-lg`}
`

export const ProductsListBlock = styled.div`
   ${tw`flex flex-col w-11/12 mt-4`}
`

export const HeaderBlock = styled.div`
   ${tw`flex justify-between mr-3 ml-3`}
`

export const ListOfItemsCount = styled.span`
   ${tw`font-medium text-xl`}
`

export const DropDown = styled.select`
   ${tw`ml-3 p-2 font-medium border border-gray-300 rounded`}
`
export const FilterOption = styled.option`
   ${tw`font-medium`}
`

export const Select = styled.div`
   ${tw``}
`

export const Lable = styled.label`
   ${tw`font-medium`}
`

export const ProductPageHeader = styled.div`
   ${tw`flex justify-between p-4`}
`

type CartBlockProps = {
   cartStatus : boolean
}
export const CartBlock = styled.div`
${tw`z-10`}
position: fixed;
top: 0px;
right: 0;
width: ${(props:CartBlockProps) =>props.cartStatus ? "30%" : "0"};
height: 100vh;
background-color:black;
transition : 0.5s;
`

export const CartContainer = styled.div`
   ${tw`relative`}
`
export const CartHeader = styled.div`
   ${tw`flex`}
`
export const Close = styled.span`
   ${tw`h-12 w-12 flex justify-center items-center border border-gray-100 -mx-12 text-gray-300 bg-black cursor-pointer`}
   display:${(props:CartBlockProps)=> props.cartStatus?"flex":"none"}
`

export const CartHeaderData = styled.div`
   ${tw`text-gray-100 flex justify-center items-center w-full mt-6 mb-6`}
`
export const CartText = styled.span`
   ${tw`ml-4 text-2xl font-semibold`}
`
export const CartSection = styled.div`
   ${tw`w-full h-full`}
`
export const IntialMessage = styled.div`
   ${tw`text-gray-100 flex justify-center items-center`}
   height:65%;
`

export const CartBody = styled.div`
   ${tw`flex flex-col h-screen`}
`
export const CartFotoor = styled.div`
   ${tw`border border-t-2 border-white flex flex-col`}
   height:30%;
`

export const AmountBlock = styled.div`
   ${tw`flex justify-between`}
`
export const Amount = styled.span`
   ${tw`text-yellow-600 m-6`}
`
export const Subtotal = styled.span`
   ${tw`m-6 text-gray-500`}
`

type CheckoutProps = {
   disabled : boolean
}
export const Checkout = styled.button`
   ${tw`p-2 mr-6 ml-6 rounded-lg bg-gray-800 text-gray-200`}
   box-shadow: 0 2px 4px 0 rgba(0, 0, 1.0, 0.2), 0 4px 20px 0 rgba(0, 0, 5.0, 0.15);
   cursor: ${(props:CheckoutProps)=> props.disabled ? "not-allowed;":"pointer"}
`

export const CartListBlock = styled.div`
   ${tw`flex flex-col text-gray-100 overflow-y-auto`}
   height:65%;
`

export const CartItemContainer = styled.div`
   ${tw`flex justify-between m-2 border-t-2 border-white p-2`}
`

export const ImageBlock = styled.div`
   ${tw`flex `}
`
export const CartImg = styled.div`
   ${tw``}
`

export const Img = styled.img`
   ${tw`w-12`}
`

export const ImageDetailsBlock = styled.div`
   ${tw`ml-2 text-s flex flex-col justify-center`}
`

export const RemoveFromCart = styled.div`
   ${tw`flex flex-col justify-between`}
`

export const CartProductTitle = styled.span`
   ${tw``}
`

export const CartProductStyled = styled.span`
   ${tw`text-xs text-gray-500`}
`

export const ProductQuantity = styled.span`
   ${tw`text-xs text-gray-500`}
`
export const RemoveItems = styled.span`
   ${tw`text-s text-gray-700 text-right font-bold cursor-pointer`}
`

export const ProductAmount = styled.span`
   ${tw`text-yellow-600 text-xs`}
`

export const TotalCartItems = styled.div`
   ${tw`text-yellow-600 font-bold text-xs`}
   position : absolute;
   top: 17px;
   left:27px;
`

export const TotalCartItemsInside = styled.div`
   ${tw`text-yellow-600 font-bold text-xs`}  
   position : absolute;
   top: 33px;
   left:170px;
`

export const SucessToast = styled.div`
   ${tw`flex`}
`

export const SucessIcon = styled.img`
   ${tw`w-6 h-6 rounded-full mt-2`}
`

export const SucessMessage = styled.span`
   ${tw`p-2`}
`

export const SearchBlock = styled.form`
   ${tw`w-9/12 flex justify-center items-center`}
`

export const SearchField = styled.input`
   ${tw`bg-gray-300 w-11/12 text-xl p-2 rounded-l-md font-semibold`}
`

export const SearchIcon = styled.div`
   ${tw`bg-orange-400 rounded-r-md`}
`
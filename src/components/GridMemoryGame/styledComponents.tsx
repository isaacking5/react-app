import styled from '@emotion/styled';
import tw from 'tailwind.macro';


// const Container = styled.div(props => ({
//     display: 'flex',
//     flexDirection: props.column && 'column'
//   }))
  

const GridBlock = styled.div`
    ${tw``}
    width: 340px
`
const Cell = styled.div`
    width : 200px
    height : 200px
    background-color : "red"
`
export {GridBlock, Cell}
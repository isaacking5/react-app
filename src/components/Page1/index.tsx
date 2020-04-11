import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import React from 'react';
import logo from "../../logo.svg";
const H1Tag = styled.h1 `
    color:lightgray;
`;
const Button = styled.button `
        color: whitesmoke`;

let PageContainer = styled.div `
${tw `bg-gray-800 h-screen flex justify-center items-center flex-col`};
`;

function Page1() {

    return (
        // <div className="">
        <PageContainer>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <H1Tag>Page 1</H1Tag>
        <Button>This my button component.</Button>

      </PageContainer>
    );
}

export default Page1;


// import React from "react";
// import logo from "../../logo.svg";
// function Page1() {

//     return (
//         <div className="bg-gray-800 h-screen flex justify-center items-center flex-col">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//             <h1 className="text-gray-300">Page 1</h1>
//       </div>
//     );
// }

// export default Page1;

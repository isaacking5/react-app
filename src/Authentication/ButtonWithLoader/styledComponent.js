import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const LoadingViewContainer = styled.div`
  ${tw`flex flex-col justify-center items-center min-h-screen bg-gray-200`}
`;

export const FailureViewContainer = styled.div`
  ${tw`flex flex-col justify-center items-center min-h-screen bg-gray-200`}
`;

export const RetryButton = styled.button`
    ${tw`bg-gray-900 text-gray-100 rounded-md`}
`;

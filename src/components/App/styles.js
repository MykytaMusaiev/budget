import styled, {createGlobalStyle} from "styled-components";

export const Wrapper = styled.div `
  padding: 5px;
  background: #eeeeee;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

Wrapper.displayName = 'AppWrapper'
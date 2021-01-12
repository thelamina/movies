import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
      
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }
      
`;

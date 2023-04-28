import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        scroll-behavior: smooth;
        line-height: 1.5;
    }
    body{
        overflow-x: hidden;
        font-family: 'Nunito', sans-serif;
        background-color: ${(props) => props.theme.gray_200};
    }
    input, textarea{
        font: inherit;
    }
    input:focus, textarea:focus{
        outline: none;
    }
    img{
        width: 100%;
        height: auto;
        display: block;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        font: inherit;
        cursor: pointer;
        border: none;
        outline: none;
    }
/* Scrollbar */
    body::-webkit-scrollbar {
        width: 8px;
        background-color: ${(props) =>
          props.theme.gray_200}             /* width of the entire scrollbar */
    }
    body::-webkit-scrollbar-track {
        background: ${(props) =>
          props.theme.gray_200};        /* color of the tracking area */
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${(props) =>
          props.theme.gray_200};    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 1px solid ${(props) => props.theme.pink};
    }
`
export default GlobalStyles

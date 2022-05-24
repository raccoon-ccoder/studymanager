import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined&display=swap');
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    html {
        height: 100%;
    }
    body {
        background-color: ${(props) => props.theme.color.black};
        padding: ${(props) => props.theme.size.mobileBaseSpace};
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-family: 'Noto Sans KR', sans-serif;

        @media screen and (min-width: 768px) {
            padding: 2rem 3rem;
            min-height: 700px;
        }
    }
    button {
        border: none;
        padding: 0;
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;

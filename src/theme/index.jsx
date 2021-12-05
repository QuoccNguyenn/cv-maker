import { createGlobalStyle } from "styled-components";

export const FixedGlobalStyle = createGlobalStyle`
    *{
        font-family: sans-serif;
        box-sizing: border-box;
    }
    body{
        background-color: #303D46;
        overflow-x: hidden;
    }
    .container{
        width: 862px;
        height: 1218px;
        background-color: #fff;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 20px;
    }
`;

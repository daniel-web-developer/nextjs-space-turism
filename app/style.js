import styles from './style.css'
import styled, {css} from "styled-components";

export const Button = styled.button`

    border: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -3px;
    transition: all 150ms ease-in-out;
    cursor: pointer;

    &:hover{
        border-bottom: 3px solid #979797;
    }

`;
import styled from "styled-components";

export const Styles = {
    CheckboxMain: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 18px;
        min-width: 18px;
        border-radius: 5px;
        background-color: #2B2F33;
        cursor: pointer;
        transition: all 100ms;

        & svg {
            width: 10px !important;
            height: 10px !important;
            visibility: ${props => props.value ? 'visible' : 'hidden'};
            opacity: ${props => props.value ? '1' : '0'};
            transition: all 100ms;
        }
    `
}
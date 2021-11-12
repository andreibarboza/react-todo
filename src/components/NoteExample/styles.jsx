import styled from "styled-components"

export const Styles = {
    NoteContent: styled.div`
        width: fit-content;
        min-width: 120px;
        max-width: 220px;
        background-color: ${props => props.conclued ? '#28a745' : '#9c9c9c73'};
        border-radius: 5px;
        padding: 10px;
        transition: all 100ms;
        
        margin: 0 10px 10px 0;
    `,

    HeaderTitle: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        font-size: 12px;
        
        gap: 10px;
    `,

    HeaderLeft: styled.div ``,

    HeaderRight: styled.div `
        & svg {
            width: 22px !important;
            height: 22px !important;
            cursor: pointer;
        }
    `,

    Separator: styled.div`
        width: 100%;
        height: 0.5px;

        background-color: rgba(255, 255, 255, 0.483);
        margin: 5px 0;
    `,

    ItemText: styled.div`
        font-size: 14px;
    `
}
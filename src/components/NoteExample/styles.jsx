import styled from "styled-components"

export const Styles = {
    NoteContent: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 20px;
        background-color: ${props => props.conclued ? '#4390bc' : '#9c9c9c75'};
        border-radius: 5px;
        padding: 10px;
        transition: all 100ms;
        margin-bottom: 10px;
    `,

    ItemText: styled.div`
        font-size: 14px;
        width: 100%;
    `,

    IconContent: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `
}
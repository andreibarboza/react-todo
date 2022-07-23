import styled from 'styled-components';

export const Styles = {
    Content: styled.div`
        background-color: #2b2f33;
        color: #FFF;

        height: 100vh;
        width: 100vw;

        overflow: hidden;

        min-width: 660px;

        display: flex;
        align-items: center;
        justify-content: center;

        & header {

        }

            & header span {
        }
    `,

    Center: styled.div`
        height: 100%;
        width: 60%;
    `,

    Notes: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        height: calc(100% - 200px);
        overflow-y: auto;
    `
}
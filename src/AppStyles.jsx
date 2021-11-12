import styled from 'styled-components';

export const Styles = {
    Content: styled.div`
        background-color: #2b2f33;
        color: #FFF;

        height: 100vh;
        width: 100vw;

        min-width: 660px;

        display: flex;
        align-items: center;
        justify-content: center;

        & header {
            margin: 80px 0 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

            & header span {
            margin-right: 10px;
        }
    `,

    Center: styled.div`
        height: 100%;
        width: 60%;
    `,

    Notes: styled.div`
        display: flex;
        align-items: center;

        flex-wrap: wrap;
    `
}
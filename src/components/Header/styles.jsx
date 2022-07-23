import styled from 'styled-components'

export const Styles = {
  Header: styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
    height: 180px;
    margin-top: 10px;

    position: relative;
  `,

  Title: styled.span``,

  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Textarea: styled.textarea`
    width: 400px;
    height: 80px;

    padding: 5px;

    resize: unset;
    border-radius: 5px 0 0 5px;
    border: 1px solid transparent;

    :focus-visible {
      outline: unset;
    }
  `,

  Button: styled.button`
    width: 30px;
    height: 92px;
    cursor: pointer;
    border: unset;
    border-radius: 0 5px 5px 0;
    background: #4390bc;

    > svg {
      fill: #fff;
    }

    :hover {
      opacity: 0.85;

      > svg {
        opacity: 0.85;
      }
    }
  `,

  Error: styled.div`
    position: absolute;
    width: 100%;
    bottom: 20px;

    font-size: 12px;
    color: red;

    display: flex;
    justify-content: center;
  `
}
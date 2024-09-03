import styled, { css } from "styled-components"




const ModalWrapper = ({children, widthsize, heightsize}) => {
    return <Wrapper>
        <ModalBox
            {...{widthsize, heightsize}}
        >
            {children}
        </ModalBox>
    </Wrapper>
}

export default ModalWrapper


const Wrapper = styled.div`
    z-index: 900;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalBox = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${({widthsize}) => widthSizeCSS[widthsize]}
    ${({heightsize}) => heightSizeCSS[heightsize]}
`

const widthSizeCSS = {
    medium: css`
        width: 700px;
    `,
    full: css`
        width: 800px;
    `,
    tutorial: css`
        width: 1000px;
    `
}

const heightSizeCSS = {
    medium: css`
        height: 500px;
    `,
    full: css`
        height: 600px;
    `,
    tutorial: css`
        height: 700px;
    `
}
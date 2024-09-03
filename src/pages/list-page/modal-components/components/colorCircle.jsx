import styled, { css } from "styled-components"





const ColorCircle = () => {
    return <ColorContainer>
        <Circle color="main"/>
        <Circle color="yellow"/>
        <Circle color="violet"/>
        <Circle color="green"/>
        <Circle color="blue"/>
        <Circle color="orange"/>
    </ColorContainer>
}

export default ColorCircle

const ColorContainer = styled.div`
    display: flex;
    gap: 6px;
    margin-bottom: 30px;
    padding: 4px 6px;
    background-color: #f5f5f5;
    border-radius: 50px;
`

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    
    ${({color}) => colorCSS[color]}
`

const colorCSS = {
    main: css`
        background-color: #0077ff;
    `,
    yellow: css`
        background-color: #d69900;
    `,
    violet: css`
        background-color: #7f2de9;
    `,
    green: css`
        background-color: #3bc057;
    `,
    blue: css`
        background-color: #1299ce;
    `,
    orange: css`
        background-color: #e28800;
    `,
}
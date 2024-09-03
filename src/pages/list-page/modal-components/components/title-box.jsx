import styled, { css } from "styled-components"




const ModalTitleBox = ({children, color}) => {
    return <Box color={color}>
        {children}
    </Box>
}

export default ModalTitleBox


const Box = styled.div`
    padding: 10px 30px;
    border-radius: 6px;
    /* margin-bottom: 20px; */

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard-SemiBold";
    color: white;
    font-size: 20px;

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

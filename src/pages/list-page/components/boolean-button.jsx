import styled, { css } from "styled-components"





const BooleanButton = ({children, func, size, ...props}) => {
    return <Button
        {...{func, size}}
        {...props}
    >
        {children}
    </Button>
}

export default BooleanButton


const Button = styled.button`
    font-family: "Pretendard-Bold";
    font-size: 20px;
    width: 100%;
    height: 60px;
    border-radius: 6px;
    background-color: white;
    transition: all 0.2s;

    ${({func}) => btnCSS[func]}
    ${({size}) => sizeCSS[size]}
`

const btnCSS = {
    update: css`
        border: 3px solid #0077ff;
        color: #0077ff;
        &:hover{
            background-color: #0077ff;
            color: white;
            font-family: "Pretendard-SemiBold";
            font-size: 22px;
        }
    `,
    cancel: css`
        border: 3px solid #f64848;
        color: #f64848;
        &:hover{
            background-color: #f64848;
            color: white;
            font-family: "Pretendard-SemiBold";
            font-size: 22px;
        }
    `
}

const sizeCSS = {
    modalSize: css`
        width: 200px;
    `
}



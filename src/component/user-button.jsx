import {css, styled} from "styled-components"



const UserButton = ({children, color, ...props}) => {
    return <Button
        {...{color}}
        {...props}
    >
        {children}
    </Button>
}
export default UserButton


const Button = styled.button`
    width: 100%;
    height: 70px;
    font-family: "Pretendard-Bold";
    font-size: 24px;
    border-radius: 6px;
    margin-bottom: 10px;
    background-color: white;
    transition: all 0.3s;

    ${({color}) => colorCSS[color]}
`


const colorCSS = {

    white: css`
        border: 2.5px solid #dfdfdf;
        color: #c2c2c2;

        &:hover{
            border: 2.5px solid #006de9;
            border-radius: 50px;
            background-color: #006de9;
            color: white;
            font-family: "Pretendard-SemiBold";
        }
    `,

    blue: css`
        background-color: #0077ff;
        border: none;
        color: white;
        font-family: "Pretendard-SemiBold";
    `
}
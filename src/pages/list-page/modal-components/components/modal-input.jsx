import styled, { css } from "styled-components"



const ModalInput = ({size, error, register, name, ...props}) => {
    return <>
        <Input
            {...{size, error}}
            {...register?.(name)}
            {...props}
        />
        <p style={{
            visibility: error ? "visible" : "hidden",
            fontFamily: "Pretendard-Bold",
            color: "#0077ff",
            marginTop: 10
        }}>{error}</p>
    </>
}

export default ModalInput


const Input = styled.input`
    height: 60px;
    background-color: #e7e7e7;
    color: #616161;
    font-size: 16px;
    border-radius: 6px;
    border: none;
    padding-left: 18px;
    font-family: "Pretendard-Medium";
    outline: none;
    transition: all 0.3s;

    &::placeholder{
        color: #a3a3a3;
    }
    &:focus{
        border-radius: 50px;
        border: 3px solid #0077ff;
    }

    ${({size}) => sizeCSS[size]}
`

const sizeCSS = {
    medium: css`
        width: 50%;
    `,
    full: css`
        width: 100%;
    `
}





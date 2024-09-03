import styled from "styled-components"



const UserInput = ({children, name, register, error, ...props}) => {
    return <InputBox>

        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            margin: "6px 10px"
        }}>
            <InputLabel>{children}</InputLabel>
            <div style={{
                visibility: error ? "visible" : "hidden",
                fontFamily: "Pretendard-Bold",
                color: "#0077ff",
            }}>{error}</div>
        </div>

        <Input {...props} name={name} {...register?.(name)}/>
    </InputBox>
}

export default UserInput


const InputBox = styled.div`
    width: 100%;
    height: 70px;
    margin-bottom: 70px;
`

const InputLabel = styled.div`
    font-family: "Pretendard-Bold";
    color: #535353;
    font-size: 24px;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    font-family: "Pretendard-Medium";
    padding-left: 20px;
    font-size: 18px;
    outline: none;
    border: 2px solid #e0e0e0;
    border-radius: 6px;

    &:hover{
        border: 2px solid #85beff;
    }

    &::placeholder{
        font-family: "Pretendard-SemiBold";
        color: rgba(0, 0, 0, 0.2);
    }

    // input 활성화 구동
    &:focus{
        animation: inputFocus 0.5s forwards;
    }
    @keyframes inputFocus {
        from{
            border: 2px solid #85beff;
        }
        to{
            border-radius: 50px;
            border: 3px solid #0077ff;
        }
    }
`
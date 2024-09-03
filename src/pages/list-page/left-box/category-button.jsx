import styled from "styled-components"
import btnArrow from "../../../image/btnArrow.png"



const CategoryButton = ({children, btnMsg, ...props}) => {
    return <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 16,
    }}>

        <BtnBox>
            <Button {...props}>{children}</Button>
            <BtnArrow src={btnArrow}/>
        </BtnBox>

        <BtnMessage>{btnMsg}</BtnMessage>

    </div>
}

export default CategoryButton

const BtnBox = styled.div`
    position: relative;
    width: 100%;

    &:hover+p{
        opacity: 1;
    }
    &:hover>button{
        background-color: #0077ff;
        border: 3px solid #0077ff;
        color: white;
        border-radius: 50px;
        font-family: "Pretendard-SemiBold";
        font-size: 150%;
    }
    &:hover>img{
        opacity: 1;
        transform: translate(20px, -8px);
    }
`

const Button = styled.button`
    width: 100%;
    height: 70px;
    /* aspect-ratio: 6/1; */
    border-radius: 6px;
    background-color: #e7e7e7;
    border: 3px solid #3a96ff;
    color: #0077ff;
    font-size: 130%;
    font-family: "Pretendard-Bold";
    margin-bottom: 4px;
    transition: all 0.3s;
`

const BtnMessage = styled.p`
    font-family: "Pretendard-Bold";
    font-size: 17px;
    color: #0077ff;
    opacity: 0;
    transition: all 0.3s;
`

const BtnArrow = styled.img`
    width: 14px;
    height: 14px;
    opacity: 0;
    position: absolute;
    left: 80%;
    top: 50%;
    transform: translateY(-8px);
    transition: all 0.3s;
`
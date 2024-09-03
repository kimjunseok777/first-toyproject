import styled from "styled-components"
import rightBoxIcon from "../../../image/rightBox-icon.png"



const PickFalse = () => {

    const onPressRightBoxFalse = () => {
        alert('리스트를 선택해주세요')
    }

    return <Wrapper onClick={onPressRightBoxFalse}>
        
        <img src={rightBoxIcon}/>
        <p>리스트를 선택해서 확인해보세요</p>
        <p>
            카테고리에서 리스트를 선택하시면 리스트의<br/>
            내용을 확인하실 수 있어요
        </p>

    </Wrapper>
}

export default PickFalse


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 14px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    transition: all 0.3s;

    &>img{
        opacity: 0.6;
        width: 120px;
        height: 120px;
        margin-bottom: 30px;
    }
    &>p:nth-of-type(1){
        font-family: "Pretendard-Bold";
        text-align: center;
        color: #727272;
        font-size: 26px;
        letter-spacing: -0.5px;
        margin-bottom: 20px;
    }
    &>p:nth-of-type(2){
        font-family: "Pretendard-SemiBold";
        text-align: center;
        color: #aaaaaa;
    }

    &:hover{
        background-color: #f1f1f1;
    }
`


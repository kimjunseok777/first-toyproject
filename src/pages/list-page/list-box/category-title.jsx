import styled, { css } from "styled-components"
import plusIcon from "../../../image/plusIcon.png"
import { useModalState } from "../../../global-state/modalState"



const CategoryTitle = ({categoryTitle, listLength, color, categoryId}) => {

    const {modalState, setModalState} = useModalState()

    const plusIconBtn = () => {
        setModalState({
            ...modalState,
            addListModal: true,
            addCategoryId: categoryId
        })
    }

    return <TitleRandomColorBox color={color}>
        
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <Title>{categoryTitle}</Title>
            <LengthBox>{listLength}</LengthBox>
        </div>
        <ListPlusIcon src={plusIcon} onClick={plusIconBtn}/>

    </TitleRandomColorBox>
}

export default CategoryTitle



const TitleRandomColorBox = styled.div`
    width: 100%;
    border-radius: 6px;
    padding: 10px 10px 10px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // color 를 props 로 받아서 색 지정
    ${({color}) => colorCSS[color]}
`
// props 로 color 값 받아서 색 지정해주면 된다
const colorCSS = {
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

const Title = styled.p`
    font-family: "Pretendard-SemiBold";
    color: white;
    font-size: 22px;
    margin-right: 8px;
`

const LengthBox = styled.div`
    width: 26px;
    height: 26px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Pretendard-Medium";
    color: white;
    font-size: 20px;
`

const ListPlusIcon = styled.img`
    width: 18px;
    height: 18px;
    opacity: 0.6;
    transition: all 0.3s;

    &:hover{
        opacity: 1;
        width: 20px;
        height: 20px;
    }
`


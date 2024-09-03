import styled from "styled-components"
import bluePlus from "../../../../image/bluePlus.png"
import { useModalState } from "../../../../global-state/modalState"


const AddListBtn = ({categoryId}) => {

    const {modalState, setModalState} = useModalState()

    const onPressAddBtn = () => {
        // console.log(categoryId) //--> 카테고리의 아이디가 온다
        setModalState({
            ...modalState,
            addListModal: true,
            addCategoryId: categoryId
        })
    }

    return <AddButton onClick={onPressAddBtn}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
        }}>
            
            <img src={bluePlus}/>

            <p>Add List</p>
            
        </div>
    </AddButton>
}

export default AddListBtn


const AddButton = styled.button`
    border-radius: 6px;
    border: none;
    background-color: #e2e2e2;
    height: 60px;
    transition: all 0.3s;

    &>div>p{
        font-family: "Pretendard-Bold";
        font-size: 20px;
        color: #5b5b5b;
        letter-spacing: -0.5px;
        transition: all 0.3s;
    }
    &>div>img{
        width: 18px;
        height: 18px;
        transition: all 0.3s;
    }

    // Add List 버튼 호버했을 때 구동
    &:hover{
        background-color: #0077ff;
    }
    &:hover>div>img{
        filter: brightness(0) invert(1);
        width: 20px;
        height: 20px;
    }
    &:hover>div>p{
        color: white;
        font-size: 22px;
    }
`





import styled from "styled-components"
import BooleanButton from "../components/boolean-button"
import ModalWrapper from "./components/modal-wrapper"
import ModalTitleBox from "./components/title-box"
import { useModalState } from "../../../global-state/modalState"




const ModalTutorial = () => {

    const {modalState, setModalState} = useModalState()

    const onPressOK = () => {
        setModalState({
            ...modalState,
            tutorialModal: false
        })
    }

    return <ModalWrapper widthsize={'tutorial'} heightsize={'tutorial'}>

        <ModalTitleBox color={'main'}>Tutorial</ModalTitleBox>

        <TutorialBox>
            현재 페이지는 리스트 페이지입니다. 왼쪽 사이드 영역의 <Point>New Category 버튼</Point>으로 카테고리를 추가할 수 있고,
            그 카테고리 내에서 또 리스트를 추가할 수 있는 구조입니다.<br/><br/>

            가운데에 있는 박스는 카테고리와 리스트들을 보여주는 영역입니다. <Point>랜덤으로 컬러가 들어간 카테고리 밑으로 리스트가 나열되어 있는 형태</Point>인데,
            여기서 <Point>Add List 버튼</Point>을 누르거나, 카테고리 부분의 <Point>+ 버튼</Point>을 눌러 리스트를 추가할 수 있습니다.<br/><br/>

            오른쪽 사이드에 있는 영역은 <Point>선택한 리스트의 내용을 보여주고, 리스트를 삭제하거나 수정할 수 있는 영역</Point>입니다.
            가운에 영역에서 리스트를 선택하면 <Point>테두리에 컬러</Point>가 들어오고, 선택된 리스트를 오른쪽 사이드 영역에서 확인하실 수 있습니다.
            체크박스를 클릭해서 리스트의 <Point>진행중상태, 완료상태</Point>를 정할 수 있고, 리스트의 내용을 <Point>수정</Point>하거나 <Point>삭제</Point>할 수 있습니다.<br/><br/>

            현재 리스트 페이지는 임의로 5개의 카테고리들과 리스트들이 작성되어있는 상태입니다. 여기서 추가로 생성, 수정, 삭제 등의 기능들을 사용해보세요!

        </TutorialBox>

        <BooleanButton func={'update'} size={'modalSize'} onClick={onPressOK}>OK</BooleanButton>

    </ModalWrapper>
}

export default ModalTutorial


const TutorialBox = styled.div`
    width: 100%;
    height: 60%;
    background-color: #e4e4e4;
    border-radius: 10px;
    margin: 30px 0px;
    padding: 20px;

    font-family: "Pretendard-SemiBold";
    color: #5a5a5a;
    font-size: 18px;
    line-height: 150%;
`

const Point = styled.span`
    font-family: "Pretendard-Bold";
    color: #0077ff;
`
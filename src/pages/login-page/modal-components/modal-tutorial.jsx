import styled from "styled-components"
import BooleanButton from "../../list-page/components/boolean-button"
import ModalWrapper from "../../list-page/modal-components/components/modal-wrapper"
import ModalTitleBox from "../../list-page/modal-components/components/title-box"




const ModalTutorial = ({modalState, setModalState}) => {

    const onPressOK = () => {
        setModalState({
            ...modalState,
            tutorialModal: false
        })
    }

    return <ModalWrapper  widthsize={'tutorial'} heightsize={'tutorial'}>

        <ModalTitleBox color={'main'}>Tutorial</ModalTitleBox>

        <TutorialBox>
            안녕하세요,<br/><br/>
            {/* 이번에 에코노베이션 동아리에 지원하게 된 21학번 김준석입니다. */}
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
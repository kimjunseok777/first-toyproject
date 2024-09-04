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

    return <ModalWrapper  widthsize={'full'} heightsize={'medium'}>

        <ModalTitleBox color={'main'}>Tutorial</ModalTitleBox>

        <TutorialBox>
            안녕하세요, 이번에 에코노베이션 동아리에 지원하게 된 21학번 디자인학과 김준석입니다.<br/>
            동아리 포트폴리오 제작을 위해 간단하게 <Point>조회, 생성, 수정, 삭제</Point> 기능으로 리스트를 제작하는 사이트를 만들어봤습니다.
            현재는 <Point>로그인 페이지</Point>이고, 로그인/회원가입을 완료하면 다음 페이지인 <Point>리스트 페이지</Point>로 넘어갑니다.<br/>
            백엔드 서버 없이, 프론트엔드 개발만으로 제작한 토이 프로젝트이기에 로그인과 회원가입은 유효성 검사만 지켜서 아무 텍스트나 입력하시면 통과됩니다.<br/>
            라이브러리는 React, react-router-dom, react-hook-form, redux-tool-kit... 등을 사용하여 제작했습니다.<br/>
            이 안내창은 <Point>Tutorial</Point> 버튼을 누르면 다시 확인하실 수 있습니다.
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

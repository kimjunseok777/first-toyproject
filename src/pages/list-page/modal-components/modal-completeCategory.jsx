import { useModalState } from "../../../global-state/modalState"
import BooleanButton from "../components/boolean-button"
import ModalWrapper from "./components/modal-wrapper"
import ModalTitleBox from "./components/title-box"




const ModalCompleteCategory = () => {

    const {modalState, setModalState} = useModalState()

    const onPressOK = () => {
        setModalState({
            ...modalState,
            completeCategory: false
        })
    }

    return <ModalWrapper widthsize={"medium"} heightsize={"medium"}>

        <ModalTitleBox color={'main'}>title</ModalTitleBox>

        <p style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 22,
            color: "#7e7e7e",
            margin: "40px 0px 40px 0px",
            textAlign: "center"
        }}>새로운 카테고리가 생성되었어요!<br/>리스트를 추가해보세요!</p>

        <BooleanButton func={'update'} size={'modalSize'} onClick={onPressOK}>OK</BooleanButton>

    </ModalWrapper>
}

export default ModalCompleteCategory




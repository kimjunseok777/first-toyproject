import ModalTitleBox from "./components/title-box"
import ModalWrapper from "./components/modal-wrapper"
import BooleanButton from "../components/boolean-button"
import { useNavigate } from "react-router-dom"
import { useModalState } from "../../../global-state/modalState"



const ModalLoginPage = () => {

    const navigation = useNavigate()
    const {modalState, setModalState} = useModalState()

    const onPressYes = () => {
        setModalState({
            ...modalState,
            loginPageModal: false
        })
        return navigation("/")
    }

    const onPressNo = () => {
        setModalState({
            ...modalState,
            loginPageModal: false
        })
    }

    return <ModalWrapper widthsize={"medium"} heightsize={"medium"}>

            <ModalTitleBox color={'main'}>Login</ModalTitleBox>

            <p style={{
                fontFamily: "Pretendard-Bold",
                fontSize: 40,
                letterSpacing: -1,
                color: "#444444",
                margin: "30px 0px 10px 0px"
            }}>Login Page</p>

            <p style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: 20,
                color: "#8d8d8d",
                marginBottom: 40
            }}>로그인 페이지로 돌아가시겠습니까?</p>

            <div style={{
                display: "flex",
                gap: 10
            }}>
                <BooleanButton func={'update'} size={'modalSize'} onClick={onPressYes}>Yes</BooleanButton>
                <BooleanButton func={'cancel'} size={'modalSize'} onClick={onPressNo}>No</BooleanButton>
            </div>

    </ModalWrapper>
}

export default ModalLoginPage


import styled from "styled-components"
import BooleanButton from "../../list-page/components/boolean-button"
import ModalWrapper from "../../list-page/modal-components/components/modal-wrapper"
import ModalTitleBox from "../../list-page/modal-components/components/title-box"
import userIcon from "../../../image/userIcon.png"
import { useNavigate } from "react-router-dom"


const ModalForm = ({setIsFormState, modalState, setModalState}) => {

    const navigation = useNavigate()

    const onPressOK = () => {

        setModalState({
            ...modalState,
            formModal: {
                state: false,
                formState: true,
                userName: undefined
            }
        })

        if(modalState.formModal.formState) return navigation("/list")
        setIsFormState(true)
    }

    return <ModalWrapper widthsize={'medium'} heightsize={'full'}>

        <ModalTitleBox color={'main'}>{modalState.formModal.formState ? "Login" : "Sign-Up"}</ModalTitleBox>

        <UserIcon src={userIcon}/>
        <UserName><Point>{modalState.formModal.userName}</Point>님 환영합니다!</UserName>
        <FormText>
            {modalState.formModal.formState ? "리스트 페이지로 이동합니다" : "로그인 페이지로 이동합니다"}
        </FormText>

        <BooleanButton func={'update'} size={'modalSize'} onClick={onPressOK}>OK</BooleanButton>

    </ModalWrapper>
}

export default ModalForm


const UserIcon = styled.img`
    width: 100px;
    height: 100px;
    margin: 30px 0px 20px 0px;
`

const UserName = styled.p`
    font-family: "Pretendard-Bold";
    font-size: 30px;
    color: #4b4b4b;
`
const Point = styled.span`
    font-family: "Pretendard-Black";
    font-size: 30px;
    color: #353535;
`
const FormText = styled.p`
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    color: #777777;
    margin: 10px 0px 30px 0px
`
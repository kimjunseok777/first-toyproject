import styled from "styled-components"
import LogoBox from "./logo-box"
import LoginBox from "./login-box"
import { useState } from "react"
import SignUpBox from "./components/signUp-box"
import ModalTutorial from "./modal-components/modal-tutorial"
import ModalForm from "./modal-components/modal-form"



const Login = () => {

    // 로그인페이지와 회원가입페이지를 구분하는 boolean 상태변수이다
    const [isFormState, setIsFormState] = useState(true)

    const [modalState, setModalState] = useState({
        tutorialModal: true,
        formModal: {
            state: false,  //-->  이게 true 이면 모달창이 켜진다
            formState: true,  //-->  이게 true 인지 false 에 따라 로그인, 회원가입 모달창이 나뉜다
            userName: undefined
        }
    })

    return <>

        {/*-------------------- 튜토리얼 모달창 --------------------*/}
        {modalState.tutorialModal ? <ModalTutorial modalState={modalState} setModalState={setModalState}/> : <></>}

        {/*-------------------- 로그인 / 회원가입 모달창 --------------------*/}
        {modalState.formModal.state ? <ModalForm modalState={modalState} setModalState={setModalState} setIsFormState={setIsFormState}/> : <></>}

        <Wrapper>

            <LogoBox/>
            {isFormState ? <LoginBox setIsFormState={setIsFormState} modalState={modalState} setModalState={setModalState}/>
            : <SignUpBox setModalState={setModalState}/>}

        </Wrapper>
    </>
}
export default Login


const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    height: 100vh;
`
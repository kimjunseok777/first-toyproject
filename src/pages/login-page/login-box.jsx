import styled from "styled-components"
import UserInput from "./components/user-input"
import UserButton from "../../component/user-button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



const LoginBox = ({setIsFormState, modalState, setModalState}) => {

    //---------------------------------------------------------------
    // RHF :
    const signInSchema = yup.object().shape({
        userName: yup.string().min(2, '2글자 이상 입력해주세요').max(6, '6글자 이하로 입력해주세요').required(""),
        email: yup.string().email('이메일 양식이 맞지 않습니다').required(""),
        password: yup.string().min(8, '비밀번호는 8글자 이상 입력해주세요').required("")
    })
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({
        mode: "all",
        resolver: yupResolver(signInSchema)
    })
    //---------------------------------------------------------------

    const onPressSignIn = (data) => {
        setModalState({
            ...modalState,
            formModal: {
                state: true,
                formState: true, //--> 로그인 성공 모달창이 열린다
                userName: data.userName
            }
        })
    }

    const onPressSignUp = () => {
        setIsFormState(false)
    }

    const onPressTutorial = () => {
        setModalState({
            ...modalState,
            tutorialModal: true
        })
    }

    return <Container>

        <FormBox onSubmit={handleSubmit(onPressSignIn)}>

            <UserInput placeholder={'이름을 입력해주세요'} name={'userName'} register={register}
                error={errors.userName?.message}
            >Name</UserInput>

            <UserInput placeholder={'이메일을 입력해주세요'} name={'email'} register={register}
                error={errors.email?.message}
            >Email</UserInput>

            <UserInput placeholder={'비밀번호를 입력해주세요'} type={'password'} name={'password'} register={register}
                error={errors.password?.message}
            >Password</UserInput>

            <br/>

            <UserButton color={'white'}>Login</UserButton>

            <div style={{
                display: "flex",
                gap: 10
            }}>
                <UserButton color={'white'} type={'button'} onClick={onPressSignUp}>SIGN-UP</UserButton>
                <UserButton color={'white'} type={'button'} onClick={onPressTutorial}>Tutorial</UserButton>
            </div>

        </FormBox>

    </Container>
}

export default LoginBox


const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

/*
const SemiCircle = styled.div`
    background-color: #0077ff;
    width: 100px; 
    height: 200px; 
    border-radius: 0 300px 300px 0;

    display: flex;
    align-items: center;
`
*/

const FormBox = styled.form`
    width: 60%;
    margin: auto;
`
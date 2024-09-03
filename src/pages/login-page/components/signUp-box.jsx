import styled from "styled-components"
import UserInput from "./user-input"
import UserButton from "../../../component/user-button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



const SignUpBox = ({modalState, setModalState}) => {

    //---------------------------------------------------------------
    // RHF :
    const signUpSchema = yup.object().shape({
        userName: yup.string().min(2, '2글자 이상 입력해주세요').max(6, '6글자 이하로 입력해주세요').required(""),
        email: yup.string().email('이메일 양식이 맞지 않습니다').required(""),
        password: yup.string().min(8, '비밀번호는 8글자 이상 입력해주세요').required(""),
        'password-confirm': yup.string().oneOf([yup.ref('password')], '비밀번호 확인이 일치하지 않습니다').required("")
    })
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({
        mode: "all",
        resolver: yupResolver(signUpSchema)
    })
    //---------------------------------------------------------------
    
    const onPressSignUp = (data) => {
        setModalState({
            ...modalState,
            formModal: {
                state: true,
                formState: false, //--> 회원가입 성공 모달창이 열린다
                userName: data.userName
            }
        })
    }

    return <Container>
        <FormBox onSubmit={handleSubmit(onPressSignUp)}>

            <UserInput placeholder={'이름을 입력해주세요'} name={'userName'} register={register}
                error={errors.userName?.message}
            >Name</UserInput>

            <UserInput placeholder={'이메일을 입력해주세요'} name={'email'} register={register}
                    error={errors.email?.message} 
            >Email</UserInput>

            <UserInput placeholder={'비밀번호를 입력해주세요'} name={'password'} register={register}
                    error={errors.password?.message} type={'password'}
            >Password</UserInput>

            <UserInput placeholder={'비밀번호를 재입력해주세요'} name={'password-confirm'} register={register}
                    error={errors['password-confirm']?.message} type={'password'}
            >Password-confirm</UserInput>

            <br/>

            <UserButton color={'white'}>SIGN-UP</UserButton>

        </FormBox>
    </Container>
}

export default SignUpBox


const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FormBox = styled.form`
    width: 60%;
    margin: auto;
`
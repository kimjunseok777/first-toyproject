import styled from "styled-components"
import BooleanButton from "../components/boolean-button"
import ModalWrapper from "./components/modal-wrapper"
import ModalInput from "./components/modal-input"
import ModalTitleBox from "./components/title-box"
import ColorCircle from "./components/colorCircle"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useModalState } from "../../../global-state/modalState"
import {useDispatch} from "react-redux"
import { addCategory } from "../../../store/list-slice"
import { randomColorFunc } from "../../../store/random-color"




const ModalNewCategory = () => {

    const {modalState, setModalState} = useModalState()
    const dispatch = useDispatch()

    //-------------------------------------------------------------------
    // RHF :

    const categoryTitleSchema = yup.object().shape({
        title: yup.string().min(4, '4글자 이상 입력해주세요').max(18, '18글자 이하로 입력해주세요').required("")
    })
    const {
        register,
        formState: {errors, isValid},
        handleSubmit
    } = useForm({
        mode: "all",
        resolver: yupResolver(categoryTitleSchema)
    })

    //------------------------------------------------
    // 카테고리 생성
    const onPressCreate = (data) => {

        dispatch(addCategory({
            id: Math.floor(Math.random() * 10000000),
            title: data.title,
            color: randomColorFunc(),
            list: []
        }))
        return setModalState({
            ...modalState,
            newCategoryModal: false,
            completeCategory: true
        })
    }
    //------------------------------------------------

    const onPressCancel = () => {
        setModalState({
            ...modalState,
            newCategoryModal: false
        })
    }

    //-------------------------------------------------------------------

    return  <ModalWrapper widthsize={"medium"} heightsize={"full"}>

    <ModalTitleBox color={'main'}>Category</ModalTitleBox>

        <p style={{
            fontFamily: "Pretendard-Bold",
            fontSize: 40,
            letterSpacing: -1,
            color: "#444444",
            margin: "30px 0px 10px 0px"
        }}>New Category</p>

        <p style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: 20,
                color: "#8d8d8d",
                marginBottom: 30
        }}>카테고리의 컬러는 랜덤으로 정해집니다</p>

        <ColorCircle/>

        <Form onSubmit={handleSubmit(onPressCreate)}>
            <ModalInput size={'full'} error={errors.title?.message} name={"title"} register={register} placeholder={'카테고리 주제를 입력해주세요'}/>

            <div style={{
                display: "flex",
                gap: 10,
                marginTop: 40
            }}>
                <BooleanButton func={'update'} size={'modalSize'}>Create</BooleanButton>
                <BooleanButton func={'cancel'} size={'modalSize'} type={'button'} onClick={onPressCancel}>Cancel</BooleanButton>
            </div>
        </Form>

    </ModalWrapper>
}

export default ModalNewCategory


const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`



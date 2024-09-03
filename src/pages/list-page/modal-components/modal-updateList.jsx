import { useDispatch, useSelector } from "react-redux"
import { useModalState } from "../../../global-state/modalState"
import BooleanButton from "../components/boolean-button"
import ModalWrapper from "./components/modal-wrapper"
import { updateList } from "../../../store/list-slice"
import ModalTitleBox from "./components/title-box"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"





const ModalUpdateList = () => {

    const {modalState, setModalState} = useModalState()
    const dispatch = useDispatch()

    //--------------------------------------------------------------
    // RHF :

    const updateSchema = yup.object().shape({
        updateText: yup.string().max(400, '포스트는 400글자 이하로 작성해주세요').required("")
    })

    const {
        register,
        formState: {errors, isValid},
        handleSubmit
    } = useForm({
        mode: "all",
        resolver: yupResolver(updateSchema)
    })

    //--------------------------------------------------------------

    const onPressComplete = (data) => {
        dispatch(updateList({
            id: modalState.chooseCategoryId,
            listId: modalState.pickListId,
            contentText: data.updateText
        }))

        console.log(data.updateText)
        return setModalState({
            ...modalState,
            updateListModal: false
        })
    }

    return <ModalWrapper widthsize={'full'} heightsize={'full'}>

        <Form onSubmit={handleSubmit(onPressComplete)}>

            <ModalTitleBox color={'main'}>update</ModalTitleBox>

            <UpdateBox>
                <UpdateText name={"updateText"} placeholder={'포스트를 작성해주세요'}
                    defaultValue={modalState.contentDefaultValue} {...register?.("updateText")}
                ></UpdateText>
            </UpdateBox>
            <p style={{
                fontFamily: "Pretendard-Bold",
                color: "#0077ff",
                marginBottom: 20
            }}>{errors.updateText?.message}</p>

            <BooleanButton func={'update'} size={'modalSize'}>Complete</BooleanButton>

        </Form>
    </ModalWrapper>
}

export default ModalUpdateList


const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const UpdateBox = styled.div`
    background-color: #e9e9e9;
    border: 1px solid #b1b1b1;
    border-radius: 10px;
    width: 100%;
    height: 60%;
    margin: 20px 0px;
    padding: 20px;
`
const UpdateText = styled.textarea`
    background-color: rgba(255, 255, 255, 0);
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-family: "Pretendard-Medium";
    font-size: 18px;
    color: #414141;
`

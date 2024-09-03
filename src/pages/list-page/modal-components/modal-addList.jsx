import styled from "styled-components"
import ModalWrapper from "./components/modal-wrapper"
import ModalTitleBox from "./components/title-box"
import ModalInput from "./components/modal-input"
import BooleanButton from "../components/boolean-button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useModalState } from "../../../global-state/modalState"
import { useDispatch, useSelector } from "react-redux"
import { addList } from "../../../store/list-slice"




const ModalAddList = () => {

    const {modalState, setModalState} = useModalState()
    const dispatch = useDispatch()
    const list = useSelector((store) => store.list)
    const findCategory = list.find((data) => data.id === modalState.addCategoryId)

    //-----------------------------------------------------------------------
    // RHF :

    const addListSchema = yup.object().shape({
        title: yup.string().min(3, '3글자 이상 입력해주세요').max(12, '12글자 이하로 입력해주세요').required(""),
        subTitle: yup.string().min(3, '3글자 이상 입력해주세요').max(18, '18글자 이하로 입력해주세요').required(""),
        description: yup.string().min(3, '3글자 이상 입력해주세요').max(40, '40글자 이하로 입력해주세요').required(""),
    })
    const {
        register,
        formState: {errors, isValid},
        handleSubmit
    } = useForm({
        mode: "all",
        resolver: yupResolver(addListSchema)
    })

    const onPressCreate = (data) => {

    // --------------------------------------------------
    // 리스트 추가 dispatch
            dispatch(addList({
                id: modalState.addCategoryId,
                // 이 카테고리 아이디를 어떻게 가져와야할까?
                listData: {
                    listId: Math.floor(Math.random() * 10000000),
                    title: data.title,
                    subTitle: data.subTitle,
                    description: data.description,
                    contentText: "포스트를 작성해주세요",
                    complete: false,
                    pick: false,
                }
            }))
        setModalState({
            ...modalState,
            addListModal: false,
            completeList: true
        })
    }

    //--------------------------------------------------

    const onPressCancel = () => {
        setModalState({
            ...modalState,
            addListModal: false
        })
    }

    //-----------------------------------------------------------------------

    return <ModalWrapper widthsize={'full'} heightsize={'full'}>

        <ModalTitleBox color={findCategory.color}>{findCategory.title}</ModalTitleBox>

        <Form onSubmit={handleSubmit(onPressCreate)}>
            <div style={{
                display: "flex",
                gap: 10,
                marginTop: 30,
                marginBottom: 20
            }}>
                <ColumnDiv>
                    <InputTitle>Title</InputTitle>
                    <ModalInput size={'full'} name={'title'} register={register} placeholder={'제목을 입력해주세요'}
                        error={errors.title?.message}
                    />
                </ColumnDiv>
                <ColumnDiv>
                    <InputTitle>Sub -Title</InputTitle>
                    <ModalInput size={'full'} name={'subTitle'} register={register} placeholder={'소제목을 입력해주세요'}
                        error={errors.subTitle?.message}
                    />
                </ColumnDiv>
            </div>
            <ColumnDiv>
                <InputTitle>Description</InputTitle>
                <ModalInput size={'full'} name={'description'} register={register} placeholder={'리스트 설명을 입력해주세요'}
                    error={errors.description?.message}
                />
            </ColumnDiv>

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

export default ModalAddList


const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ColumnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const InputTitle = styled.p`
    font-family: "Pretendard-Bold";
    font-size: 24px;
    letter-spacing: -1px;
    color: #444444;
    padding: 0px 0px 4px 4px;
`
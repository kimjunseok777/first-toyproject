import { useDispatch, useSelector } from "react-redux"
import { useModalState } from "../../../global-state/modalState"
import BooleanButton from "../components/boolean-button"
import ModalWrapper from "./components/modal-wrapper"
import ModalTitleBox from "./components/title-box"
import { deleteList } from "../../../store/list-slice"


const ModalDeleteList = () => {


    const {modalState, setModalState} = useModalState()
    const dispatch = useDispatch()
    const list = useSelector((store) => store.list)

    const findCategory = list.find((data) => data.id === modalState.chooseCategoryId) //--> 이 findCategory 가 undefined 로 뜬다 --> 즉 이 객체는 list 라는 값이 없다
    // 여기서 chooseCategoryId 가 undefined 인 것이다  -->  chooseCategoryId 값 어딘가에서 바꿔줬는지 확인해보자

    const findList = findCategory.list.find((data) => data.listId === modalState.pickListId)

    console.log(modalState.pickListId)


    const onPressYes = () => {
        dispatch(deleteList({
            id: modalState.chooseCategoryId,
            listId: modalState.pickListId,
        }))
        return setModalState({
            ...modalState,
            deleteListModal: false,
            chooseCategoryId: undefined,
            pickListId: undefined
        })
    }
    
    const onPressNo = () => {
        setModalState({
            ...modalState,
            deleteListModal: false
        })
    }


    return <ModalWrapper widthsize={'medium'} heightsize={'medium'}>

        <ModalTitleBox color={findCategory.color}>{findCategory.title}</ModalTitleBox>

            <p style={{
                fontFamily: "Pretendard-Bold",
                fontSize: 34,
                color:"#4b4b4b",
                letterSpacing: -1,
                margin: "30px 0px 20px 0px"
            }}>- {findList.title} -</p>

            <p style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: 20,
                color:"#8b8b8b",
            }}>정말로 이 리스트를 삭제하시겠습니까?</p>

            <div style={{
                display: "flex",
                gap: 10,
                marginTop: 40
            }}>
                <BooleanButton func={'update'} size={'modalSize'} onClick={onPressYes}>Yes</BooleanButton>
                <BooleanButton func={'cancel'} size={'modalSize'} onClick={onPressNo}>No</BooleanButton>
            </div>

    </ModalWrapper>
}


export default ModalDeleteList


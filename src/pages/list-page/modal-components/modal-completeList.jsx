import { useSelector } from "react-redux"
import { useModalState } from "../../../global-state/modalState"
import BooleanButton from "../components/boolean-button"
import ModalWrapper from "./components/modal-wrapper"
import ModalTitleBox from "./components/title-box"




const ModalCompleteList = () => {

    const {modalState, setModalState} = useModalState()
    const list = useSelector((store) => store.list)
    const findCategory = list.find((data) => data.id === modalState.addCategoryId)

    const onPressOK = () => {
        setModalState({
            ...modalState,
            completeList: false,
            addCategoryId: undefined
            // 선택한 카테고리의 아이디값 초기화
        })
    }

    return <ModalWrapper widthsize={'medium'} heightsize={'medium'}>

        <ModalTitleBox color={findCategory.color}>{findCategory.title}</ModalTitleBox>
        <p style={{
            fontFamily: "Pretendard-Bold",
            fontSize: 40,
            letterSpacing: -1,
            color: "#444444",
            margin: "30px 0px 20px 0px"
        }}>{findCategory.list[findCategory.list.length-1].title}</p>

        <p style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 20,
            color: "#8d8d8d",
            textAlign: "center",
            marginBottom: 40
        }}>새로운 리스트가 생성됐어요!<br/>리스트를 선택후 포스트를 작성해보세요</p>

        <BooleanButton func={'update'} size={'modalSize'} onClick={onPressOK}>OK</BooleanButton>

    </ModalWrapper>
}

export default ModalCompleteList
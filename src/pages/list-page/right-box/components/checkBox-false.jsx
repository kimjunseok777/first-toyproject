import styled from "styled-components"
import CheckBox from "../../components/checkBox"
import { useDispatch } from "react-redux"
import { checkBoxChange } from "../../../../store/list-slice"
import { useModalState } from "../../../../global-state/modalState"




const FalseCheckBox = ({ pickList }) => {

    const {modalState, setModalState} = useModalState()
    const dispatch = useDispatch()

    // 체크박스 완료로 바꿔주기
    const onPressCheckBox = () => {
        dispatch(checkBoxChange({
            id: modalState.chooseCategoryId,
            listId: pickList
        }))
    }

    return  <>
        <CheckBox onClick={onPressCheckBox}
            state={'rightFalse'}
            size={'rightBox'}
            color={'gray'}
        />
        <StateText>완료된 리스트라면 버튼을 눌러 Clear 상태로 바꿔주세요</StateText>
    </>
}

export default FalseCheckBox


const StateText = styled.p`
    font-family: "Pretendard-SemiBold";
    color: #aaaaaa;
    font-size: 16px;
`



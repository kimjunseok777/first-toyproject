import styled from "styled-components"
import CheckBox from "../../components/checkBox"
import { useDispatch } from "react-redux"
import { checkBoxChange } from "../../../../store/list-slice"
import { useModalState } from "../../../../global-state/modalState"




const TrueCheckBox = ({ pickList }) => {

    const {modalState, setModalState} = useModalState()
    const dispatch = useDispatch()

    // 체크박스 미완료로 바꿔주기
    const onPressCheckBox = () => {
        dispatch(checkBoxChange({
            id: modalState.chooseCategoryId,
            listId: pickList
        }))
    }

    return  <>
        <CheckBox onClick={onPressCheckBox}
            state={'rightTrue'}
            size={'rightBox'}
            color={'green'}
        />
        <StateText>Clear</StateText>
    </>
}

export default TrueCheckBox


const StateText = styled.p`
    font-family: "Pretendard-Bold";
    color: #3bc057;
    font-size: 20px;
`



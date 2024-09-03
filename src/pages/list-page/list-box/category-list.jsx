import styled, { css } from "styled-components"
import CheckBox from "../components/checkBox"
import { useDispatch, useSelector } from "react-redux"
import { pickChange } from "../../../store/list-slice"
import { useModalState } from "../../../global-state/modalState"




const CategoryList = ({listSubTitle, listTitle, description, complete, listId, categoryId, pickList, ...props}) => {

    const dispatch = useDispatch()

    //----------------------------------------------------------
    const {modalState, setModalState} = useModalState()
    const list = useSelector((store) => store.list)
    //----------------------------------------------------------

    const onPressList = () => {
        dispatch(pickChange({
            id: categoryId,
            listId: listId
        }))
        // 선택한 리스트의 pick 을 true 로 바꾸는 dispatch
        modalState.chooseCategoryId = categoryId  //-->  선택한 것의 카테고리 아이디를 가져오기 위함
        modalState.pickListId = listId  //-->  선택한 것의 리스트 아이디를 가져오기 위함
    }

    const findCategory = list.find((data) => data.id === categoryId)

    return <ListBox {...props} onClick={onPressList} style={{
        border: pickList ? `3px solid ${colorCSS[findCategory.color]}` : "1px solid #e7e7e7"
    }}>

        <ListLittleTitle>{listSubTitle}</ListLittleTitle>
        <ListTitle>{listTitle}</ListTitle>
        <TitleContent>{description}</TitleContent>

        {/* complete 를 속성으로 받아서 삼항연산자 조건을 걸어준 것이다 */}
        {complete ? <CheckBox
            state={'listTrue'}
            size={'listBox'}
            color={'green'}
            position={"listBox"}
        /> : <CheckBox
            state={'listFalse'}
            size={'listBox'}
            color={'gray'}
            position={"listBox"}
        />}

    </ListBox>
}


export default CategoryList


const ListBox = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 6px;
    padding: 12px 12px 90px 12px;
    position: relative;
    transition: all 0.3s;
`

const colorCSS = {
    yellow: "#d69900",
    violet: "#7f2de9",
    green: "#3bc057",
    blue: "#1299ce",
    orange: "#e28800"
}


const ListLittleTitle = styled.p`
    font-family: "Pretendard-SemiBold";
    font-size: 14px;
    color: #999999;
`
const ListTitle = styled.p`
    font-family: "Pretendard-Bold";
    font-size: 26px;
    letter-spacing: -0.5px;
    color: #424242;
    margin: 6px 0px 16px 0px;
`
const TitleContent = styled.p`
    font-family: "Pretendard-Medium";
    font-size: 18px;
    color: #a3a3a3;
    word-break:break-all;
`




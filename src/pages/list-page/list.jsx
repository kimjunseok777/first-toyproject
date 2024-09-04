import {styled} from "styled-components"
import ListBox from "./listBox"
import SideBoxLeft from "./sideBox-left"
import SideBoxRight from "./sideBox-right"
import ModalLoginPage from "./modal-components/modal-loginPage"
import ModalNewCategory from "./modal-components/modal-newCategory"
import ModalAddList from "./modal-components/modal-addList"
import ModalTutorial from "./modal-components/modal-tutorial"
import ModalDeleteList from "./modal-components/modal-deleteList"
import { useModalState } from "../../global-state/modalState"
import ModalCompleteCategory from "./modal-components/modal-completeCategory"
import ModalCompleteList from "./modal-components/modal-completeList"
import {useSelector} from "react-redux"
import ModalUpdateList from "./modal-components/modal-updateList"



// 이 List 가 두번째 페이지 최상위 컴포넌트이다
const List = () => {

    //------------------------------------------------------------------------

    // rtk 전역상태 initialState 가져와준 것이다
    const list = useSelector((store) => store.list)

    //------------------------------------------------------------------------

    // 모달창을 boolean 형으로 관리하는 context 전역상태이다
    // 카테고리, 리스트 생성 완료 모달 컴포넌트는, 모달창의 하위요소로 만들어줬다 (컴포넌트에 가면 있다)
    const {modalState} = useModalState()

    return <>

        {/*--------------- 튜토리얼 모달창 ---------------*/}
        {modalState.tutorialModal ? <ModalTutorial/> : <></>}

        {/*--------------- 로그인 버튼 모달창 ---------------*/}
        {modalState.loginPageModal ? <ModalLoginPage/> : <></>}
        
        {/*--------------- 새로운 카테고리 버튼 모달창 ---------------*/}
        {modalState.newCategoryModal ? <ModalNewCategory/> : <></>}
        
        {/*--------------- 카테고리 생성 완료 모달창 ---------------*/}
        {modalState.completeCategory ? <ModalCompleteCategory/> : <></>}

        {/*--------------- 리스트 추가 모달창 ---------------*/}
        {modalState.addListModal ? <ModalAddList/> : <></>}

        {/*--------------- 리스트 생성 완료 모달창 ---------------*/}
        {modalState.completeList ? <ModalCompleteList/> : <></>}
 
        {/*--------------- 리스트 삭제 모달창 ---------------*/}
        {modalState.deleteListModal ? <ModalDeleteList/> : <></>}

        {modalState.updateListModal ? <ModalUpdateList/> : <></>}


        <SideBoxLeft></SideBoxLeft>
        {/* 이 SideBoxRight 에 선택에 관한 컴포넌트가 있음 */}
        <SideBoxRight></SideBoxRight>

        <Wrapper>
            <Container>
                {list.map((data) => <ListBox key={data.id} categoryContent={data}></ListBox>)}
            </Container>
        </Wrapper>
    </>
}

// 모달 전역상태 페이지로 빼주기 , 

export default List


const Wrapper = styled.div`
    background-color: #e7e7e7; 
    padding: 20px 25% 20px 20%;
    min-height: 100vh;  //-->  배경 최소 높이 100vh 설정
`

// 이 Container 가 카테고리와 리스트를 감싸고있는 하얀색 박스이다
const Container = styled.div`
    width: 100%;
    padding: 16px;
    background-color: white;
    border-radius: 14px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px 10px;
`



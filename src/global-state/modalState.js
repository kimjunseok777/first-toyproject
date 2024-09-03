import { createContext, useContext, useState } from "react"


// 리스트 페이지의 여러개의 모달창의 on / off 를 관리하는 context 전역상태이다
const ModalContext = createContext()
export const useModalState = () => useContext(ModalContext)


const ModalProvider = ({children}) => {

    const [modalState, setModalState] = useState({
        tutorialModal: true, //--> 리스트페이지 시작부터 튜토리얼 모달창은 열려있기에 true로 해준 것이다
        loginPageModal: false,

        // 카테고리 모달 관리
        newCategoryModal: false,
        completeCategory: false,

        // 리스트 추가
        addListModal: false,
        completeList: false,

        // 리스트 삭제
        deleteListModal: false,

        // 리스트 수정
        updateListModal: false,
        contentDefaultValue: undefined, //--> defaultValue 값 가져오기 위함

        // addList 에서 쓰이는 키값
        addCategoryId: undefined,

        // list pick, delete list 에서 쓰이는 키값
        // 선택한 카테고리의 아이디값
        chooseCategoryId: undefined,

        // 선택한 리스트의 아이디값
        pickListId: undefined,
    })

    return <ModalContext.Provider value={{modalState, setModalState}}>
        {children}
    </ModalContext.Provider>
}

export default ModalProvider



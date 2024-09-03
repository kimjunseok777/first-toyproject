import { useModalState } from "../../../global-state/modalState"
import CategoryButton from "./category-button"


const CategoryButtonBox = () => {

    const {modalState, setModalState} = useModalState()

    //----------------------------------------------------------
    // Login Page 버튼: 
    const onPressLoginBtn = () => {
        setModalState({
            ...modalState,
            loginPageModal: true
        })
    }

    //----------------------------------------------------------
    // New Category 버튼: 
    const onPressNewBtn = () => {
        setModalState({
            ...modalState,
            newCategoryModal: true
        })
    }

    //----------------------------------------------------------
    // Tutorial 버튼: 
    const onPressTutorialBtn = () => {
        setModalState({
            ...modalState,
            tutorialModal: true
        })
    }

    //----------------------------------------------------------

    return <>

        <CategoryButton onClick={onPressLoginBtn} btnMsg={'로그인 페이지로 돌아가요'}>
            Login Page
        </CategoryButton>

        <CategoryButton onClick={onPressNewBtn} btnMsg={'새로운 카테고리를 추가할 수 있어요'}>
            New Category
        </CategoryButton>

        <CategoryButton onClick={onPressTutorialBtn} btnMsg={'기능들을 소개해드려요'}>
            Tutorial
        </CategoryButton>

    </>
}

export default CategoryButtonBox
import styled from "styled-components"
import CategoryTitle from "./list-box/category-title"
import CategoryList from "./list-box/category-list"
import AddListBtn from "./list-box/components/addList-btn"
import { useModalState } from "../../global-state/modalState"



const ListBox = ({categoryContent}) => {

    const {modalState, setModalState} = useModalState()

    return <>

        <CategoryBox>

            {/*----------------- 카테고리 타이틀 -----------------*/}
            <CategoryTitle
                categoryTitle={categoryContent.title}
                listLength={categoryContent.list.length}
                color={categoryContent.color}
                categoryId={categoryContent.id}
            ></CategoryTitle>

            {/*--------------------- 리스트 ----------------------*/}
            {categoryContent.list.map((data) => <CategoryList
                key={data.listId}
                listSubTitle={data.subTitle}
                listTitle={data.title}
                description={data.description}
                complete={data.complete}
                listId={data.listId}
                categoryId={categoryContent.id}
                pickList={data.pick}
            ></CategoryList>)}

            <AddListBtn categoryId={categoryContent.id}/>
            
        </CategoryBox>
    </>
}

export default ListBox


// 카테고리의 영역을 나타내는 회색 박스
const CategoryBox = styled.div`
    padding: 10px;
    /* background-color: #f3f3f3; */
    background-color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

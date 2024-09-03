import styled from "styled-components"
import PickTrueTitle from "./components/pickTrue-title"
import PickTrueContent from "./components/pickTrue-content"
import { addList } from "../../../store/list-slice"



const PickTrue = ({pickList}) => {

    return <Wrapper>

        <PickTrueTitle pickList={pickList}/>
        <PickTrueContent pickList={pickList}/>

    </Wrapper>
}

export default PickTrue


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 14px;
    // 패딩 16+10 한것이다 --> 리스트 박스와 라인 맞추기 위함
    padding: 26px 20px;
`


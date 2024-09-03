import styled from "styled-components"
import PickFalse from "./right-box/pick-false"
import PickTrue from "./right-box/pick-true"
import { useSelector } from "react-redux"



const SideBoxRight = () => {

    const list = useSelector((store) => store.list)

    const findList = list.map((data) => data.list.find((el) => el.pick === true))
    const pickList = findList.find((data) => data?.pick)
    // findList 배열에서 pick 이 존재하는 요소를 찾아서 반환한다 (객체를 반환하고, 없다면 undefined 를 반환한다)

    // console.log(pickList)

    return <Container>

        {/*-------- 데이터의 pick 이 true 이면 rightBox 에 보이는 것이다 --------*/}
        {pickList ? <PickTrue pickList={pickList}/> : <PickFalse/>}

    </Container>
}

export default SideBoxRight


const Container = styled.div`
    height: calc(100% - 40px);
    position: fixed;
    top: 20px;
    right: 20px;
    width: calc(100% - 77%);
`



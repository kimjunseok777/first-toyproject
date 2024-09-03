import styled from "styled-components"
import LeftTopBox from "./left-box/top-box"



const SideBoxLeft = () => {
    return <Container>
        <LeftTopBox></LeftTopBox>
    </Container>
}

export default SideBoxLeft


const Container = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    width: calc(100% - 82%);
`



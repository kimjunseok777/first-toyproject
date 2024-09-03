import styled from "styled-components"



const LogoBox = () => {
    return <Container>

        <Check/>

        <h1 style={{
            fontFamily: "Pretendard-Bold",
            color: "white" ,
            fontSize: 50,
            textShadow: "7px 5px #0068df"
        }}>MY List</h1>

        <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: "Pretendard-Medium",
            fontSize: 18,
            marginBottom: 32,
            wordSpacing: "0px"
        }}>Make your own list!</p>

        <p style={{
            textAlign: "center",
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: "Pretendard-Medium",
            fontSize: 20,
            wordSpacing: "3px",
            lineHeight: "24px"
        }}>
            나만의 리스트를 만들다, 마이리스트
        </p>

    </Container>
}

export default LogoBox


const Container = styled.div`
    width: 50%;
    background-color: #0077ff;
    border-radius: 10px;
    padding: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

// MY LIST 로고
const Check = styled.div`
    width: 100px;
    height: 140px;
    border-bottom: 30px solid white;
    border-right: 30px solid white;
    transform: rotate(45deg);
    margin-bottom: 50px;
    box-shadow: 14px 14px 0px 0px #0068df;
`
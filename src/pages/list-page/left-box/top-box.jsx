import styled from "styled-components"
import searchImage from "../../../image/search.png"
import xIcon from "../../../image/xIcon.png"
import triangle from "../../../image/triangle.png"
import CategoryButtonBox from "./category-buttonBox.jsx"



const LeftTopBox = () => {

    const onPressSearchBox = () => {
        alert('검색 UI 기능구현 준비중입니다')
    }

    return <>
        {/*---------------- 상단 로고 ----------------*/}
        <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 15
        }}>
            <LogoBox>
                <Check/>
            </LogoBox>
            <div>
                <h1 style={{
                    fontFamily: "Pretendard-Black",
                    color: "#3f3f3f",
                    fontSize: 36,
                    letterSpacing: -0.5
                }}>MY List</h1>
                <p style={{
                    fontFamily: "Pretendard-Medium",
                    color: "#9e9e9e",
                    fontSize: 18,
                    marginTop: -4
                }}>Make your own list!</p>
            </div>
        </div>

        {/*---------------- 검색창 ----------------*/}
        <SearchBox onClick={onPressSearchBox}>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <SearchIcon src={searchImage}/>
                <p>리스트를 검색해보세요!</p>
                <p>검색 UI 기능구현 준비중...</p>
            </div>

            <SearchCancelBox>
                <XIcon src={xIcon}/>
            </SearchCancelBox>
        </SearchBox>

        {/*---------------- 리스트 기능 버튼 ----------------*/}
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <ButtonTitle>BUTTON CATEGORY</ButtonTitle>
            <Arrow src={triangle}/>
        </div>

        <p style={{
            fontFamily: "Pretendard-SemiBold",
            marginBottom: 20,
            color: "#929292"
        }}>새로운 항목을 만들 수 있어요!</p>

        <div style={{
            marginBottom: 30,
            height: 3,
            backgroundColor: "#d5d5d5"
        }}/>

        {/* 이 버튼박스에 버튼 3가지 넣어줬다 */}
        <CategoryButtonBox/>
    </>
}

export default LeftTopBox


//-----------------------------------------------
// 상단 로고 :

const LogoBox = styled.div`
    width: 80px;
    height: 80px;
    background-color: #0077ff;
    border-radius: 10px;
    margin-right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Check = styled.div`
    width: 28px;
    height: 42px;
    border-bottom: 9px solid white;
    border-right: 9px solid white;
    transform: rotate(45deg);
    margin-top: -10px;
`

//-----------------------------------------------
// 검색창 :

const SearchBox = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    width: 100%;
    padding: 6px 6px  6px 10px;
    margin-bottom: 60px;
    transition: all 0.3s;

    &>div>p{
        font-family: "Pretendard-Medium";
        color: #b3b3b3;
        transition: all 0.3s;
    }
    &>div>p:nth-of-type(2){
        position: absolute;
        left: 52px;
        color: white;
        transition: all 0.3s;
        display: none;
    }

    &:hover {
        background-color: #0077ff;
    }
    &:hover>div:first-of-type>img {
        filter: brightness(0) invert(1);
    }
    &:hover>div>p{
        display: none;
    }
    &:hover>div>p:nth-of-type(2){
        display: block;
    }
    &:hover>div:nth-of-type(2){
        background-color: #0077ff;
    }
    &:hover>div:last-of-type>img {
        opacity: 0;
    }
`
const SearchIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 12px;
`
const SearchCancelBox = styled.div`
    width: 40px;
    height: 40px;
    background-color: #e6e6e6;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
`
const XIcon = styled.img`
    width: 20px;
    height: 20px;
    transition: all 0.3s;
`


//-----------------------------------------------
// 버튼 영역 :

const ButtonTitle = styled.p`
    font-family: "Pretendard-Bold";
    font-size: 26px;
    color: #3f3f3f;
    letter-spacing: -0.5px;
`
const Arrow = styled.img`
    width: 20px;
    height: 16px;
    animation: underArrow 0.5s ease-out infinite alternate;

    @keyframes underArrow {
        100% {
            transform: translateY(10px);
        }
    }
`

//-->  ButtonBox 로 컴포넌트 분리시켜줬다
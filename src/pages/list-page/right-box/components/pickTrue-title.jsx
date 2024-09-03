import { useSelector } from "react-redux"
import styled, { css } from "styled-components"



const PickTrueTitle = ({ pickList }) => {

    const list = useSelector((store) => store.list)
    const findCategory = list.find((data) => data.list.find((el) => el === pickList))

    // 카테고리의 데이터도 필요하다  -->  카테고리 컬러 박스에 데이터를 넣어줘야한다
    return <>
        <CategoryBox color={findCategory.color}>{findCategory.title}</CategoryBox>
        <Title>{pickList.title}</Title>
        <LittleTitle>{pickList.subTitle}</LittleTitle>
    </>
}

export default PickTrueTitle


const CategoryBox = styled.div`
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Pretendard-SemiBold";
    font-size: 22px;

    ${({color}) => colorCSS[color]}
`
const colorCSS = {
    yellow: css`
        background-color: #d69900;
    `,
    violet: css`
        background-color: #7f2de9;
    `,
    green: css`
        background-color: #3bc057;
    `,
    blue: css`
        background-color: #1299ce;
    `,
    orange: css`
        background-color: #e28800;
    `,
}

const Title = styled.p`
    font-family: "Pretendard-Bold";
    color: #3f3f3f;
    font-size: 38px;
    letter-spacing: -1px;
    margin-bottom: 10px;
`

const LittleTitle = styled.p`
    font-family: "Pretendard-Medium";
    color: #a3a3a3;
    font-size: 20px;
    margin-bottom: 30px;
`
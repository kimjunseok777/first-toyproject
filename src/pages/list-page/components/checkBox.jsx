import styled, { css } from "styled-components"



const CheckBox = ({state, size, color, position, ...props}) => {
    
    return <Box
        {...{size, color, position}}
        {...props}
    >
        <StateIcon state={state}/>
    </Box>
}

export default CheckBox


//---------------------------------------------
// 아이콘 박스 :

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    ${({size}) => sizeCSS[size]}
    ${({color}) => colorCSS[color]}
    ${({position}) => positionCSS[position]}
`

const sizeCSS = {
    listBox: css`
        width: 40px;
        height: 40px;
        border-radius: 6px;
    `,
    rightBox: css`
        min-width: 60px;
        min-height: 60px;
        border-radius: 6px;
    `
}
const colorCSS = {
    green: css`
        background-color: #3bc057;
        &:hover{
            background-color: #29a844;
        }
    `,
    gray: css`
        background-color: #e7e7e7;
        &:hover{
            background-color: #dadada;
        }
        &:hover>div{
            background-color: #a3a3a3;
        }
    `
}
const positionCSS = {
    listBox: css`
        position: absolute;
        right: 10px;
        bottom: 10px;
    `,
    // rightBox: css`
    //     /* margin-bottom: 20px; */
    // `
}


//---------------------------------------------
// 아이콘 :

const StateIcon = styled.div`
    transition: all 0.3s;
    ${({state}) => stateCSS[state]}
`

const stateCSS = {
    listTrue: css`
        width: 14px;
        height: 22px;
        border-bottom: 5px solid white;
        border-right: 5px solid white;
        transform: rotate(45deg);
        margin-top: -6px;
    `,
    listFalse: css`
        width: 26px;
        height: 6px;
        background-color: #bebebe;
    `,
    rightTrue: css`
        width: 24px;
        height: 36px;
        border-bottom: 7px solid white;
        border-right: 7px solid white;
        transform: rotate(45deg);
        margin-top: -8px;
    `,
    rightFalse: css`
        width: 34px;
        height: 10px;
        background-color: #bebebe;
    `,
}


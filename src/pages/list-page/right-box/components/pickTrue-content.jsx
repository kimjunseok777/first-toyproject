import styled from "styled-components"
import TrueCheckBox from "./checkBox-true"
import FalseCheckBox from "./checkBox-false"
import BooleanButton from "../../components/boolean-button"
import { useState } from "react"
import { useModalState } from "../../../../global-state/modalState"




const PickTrueContent = ({ pickList }) => {

    const {modalState, setModalState} = useModalState()

    // f리스트 삭제 :
    const onPressDelete = () => {
        setModalState({
            ...modalState,
            deleteListModal: true
        })
    }

    //--------------------------------------------------------------

    // 리스트 수정 :
    const onPressUpdate = () => {
        setModalState({
            ...modalState,
            updateListModal: true,
            contentDefaultValue: pickList.contentText //--> defaultValue 가져오기 위해 값을 넣어준 것이다
        })
    }

    //--------------------------------------------------------------

    return <>
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
        }}>

            {/* 체크박스 모듈화 해놓은 것이다 */}
            {pickList.complete ? <TrueCheckBox pickList={pickList.listId}/> : <FalseCheckBox pickList={pickList.listId}/>}

        </div>
        
        <TextContentBox>
                <p style={{
                    wordBreak: "break-all",
                    lineHeight: 1.5
                }}>{pickList.contentText}</p>
        </TextContentBox>

        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 20
        }}>
            <BooleanButton func={'update'} onClick={onPressUpdate}>Update</BooleanButton>
            <BooleanButton func={'cancel'} onClick={onPressDelete}>Delete</BooleanButton>
        </div>

    </>
}

export default PickTrueContent



const TextContentBox = styled.div`
    width: 100%;
    min-height: 40%;
    background-color: #f6f6f6;
    padding: 10px;
    border: 1px solid #e7e7e7;
    border-radius: 6px;
    color: #747474;
    font-family: "Pretendard-Medium";
    font-size: 18px;
`

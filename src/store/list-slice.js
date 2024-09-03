import { createSlice } from "@reduxjs/toolkit"



const initialState = [
    {
        id: Math.floor(Math.random() * 10000000),
        title: "TodoList",
        color: "yellow",
        list: [
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "JavaScript Study",
                subTitle: "SW Developer Study",
                description: "자바스크립트 기본 개념부터 고차함수까지 공부",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "Figma Skill Up",
                subTitle: "UI/UX Design",
                description: "웹사이트 구축을 위한 디자인 스킬과 기획 능력 기르기",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: true,
                pick: false,
            },
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "JS FrameWork",
                subTitle: "JS FrameWork Study",
                description: "자바스크립트 프레임 워크임 React와 Next.js 개념 학습",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: true,
                pick: false,
            },
        ]
    },
    {
        id: Math.floor(Math.random() * 10000000),
        title: "TeamProject",
        color: "violet",
        list: [
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "React Team Project",
                subTitle: "Team Flow Project",
                description: "리액트 팀프로젝트 유효성검사 기능구현 진행",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: true,
                pick: false,
            },
        ]
    },
    {
        id: Math.floor(Math.random() * 10000000),
        title: "Future Plan",
        color: "green",
        list: [
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "Next.JS Project",
                subTitle: "JS FrameWork Study",
                description: "리액트 프로젝트 끝낸후, Next.js 프로젝트 진행하기",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "TypeScript Study",
                subTitle: "TS Study",
                description: "자바스크립트와 프레임워크 공부 마치고 타입스크립트 공부 진행하기",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
        ]
    },
    {
        id: Math.floor(Math.random() * 10000000),
        title: "협업 능력 향상",
        color: "blue",
        list: [
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "협업 연습",
                subTitle: "Soft Skill Up",
                description: "팀원들과 개발에 관한 여러가지 주제로 대화해보기",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "팀 컨벤션 정하기",
                subTitle: "Soft Skill Up",
                description: "효율적인 협업을 위한 팀 컨벤션에 관한 논의",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "협업 회고 작성",
                subTitle: "Soft Skill Up",
                description: "노션 등 플랫폼을 활용하여 팀 협업 회고 작성하기",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "코드 문서화",
                subTitle: "Soft Skill Up",
                description: "효율적인 협업을 위한 코드리뷰와 문서화 진행",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
        ]
    },
    {
        id: Math.floor(Math.random() * 10000000),
        title: "개인 공부",
        color: "orange",
        list: [
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "페이지네이션 기능구현",
                subTitle: "개인 학습 진행",
                description: "프론트엔드의 기본이되는 기능 공부 및 기능구현",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: true,
                pick: false,
            },
            {
                listId: Math.floor(Math.random() * 10000000),
                title: "스켈레톤 UI 기능구현",
                subTitle: "개인 학습 진행",
                description: "프론트엔드의 기본이되는 기능 공부 및 기능구현",
                contentText: "예시 포스트입니다, update 버튼으로 포스트를 작성해줄 수 있습니다.",
                complete: false,
                pick: false,
            },
        ]
    },
]



export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        
        // 카테고리 추가
        addCategory: (state, action) => {
            state.push(action.payload)
        },

        // 리스트 추가
        addList: (state, action) => {
            const findCategory = state.find((data) => data.id === action.payload.id)
            findCategory.list.push(action.payload.listData)
        },

        // 리스트 삭제
        deleteList: (state, action) => {
            const findCategory = state.find((data) => data.id === action.payload.id)
            findCategory.list = findCategory.list.filter((data) => data.listId !== action.payload.listId)
        },

        // 리스트 수정
        updateList: (state, action) => {
            const findCategory = state.find((data) => data.id === action.payload.id)
            const findList = findCategory.list.find((data) => data.listId === action.payload.listId)
            findList.contentText = action.payload.contentText
        },

        // 리스트 선택
        pickChange: (state, action) => {
            state.map((data) => data.list.map((el) => el.pick = false))
            const findCategory = state.find((data) => data.id === action.payload.id)
            const findList = findCategory.list.find((data) => data.listId === action.payload.listId)
            findList.pick = true
        },

        // 체크박스 변경
        checkBoxChange: (state, action) => {
            const findCategory = state.find((data) => data.id === action.payload.id)
            const findList = findCategory.list.find((data) => data.listId === action.payload.listId)
            findList.complete = !findList.complete
        },
    }
})


export const {
    addCategory,
    addList,
    deleteList,
    updateList,
    pickChange,
    checkBoxChange
} = listSlice.actions

export default listSlice.reducer




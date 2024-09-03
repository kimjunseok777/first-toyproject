

const randomColor = ["yellow", "violet", "green", "blue", "orange"]

// 컬러 순서대로 반환
// let num = 4
// export function randomColorFunc() {
//     num++
//     if(num > randomColor.length-1) num = 0
//     return randomColor[num]
// }

// 컬러 랜덤으로 반환
export function randomColorFunc() {
    const randomNum = Math.floor(Math.random() * 5)
    return randomColor[randomNum]
}
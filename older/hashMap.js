let frequency = (str) => {
    let hashy = {}
    for (let i = 0; i < str.length; i++) {
        if (hashy[str[i]]) {
            hashy[str[i]] += 1
        }
        else {
            hashy[str[i]] = 1
        }
    }
    console.log(hashy)
}

//ex: frequency("hello")
//  => h:1, e:1, l:2, o:1

// frequency("akjsdfglksjdhfivlsundjflk")

showCounter = () => {
    return setTimeout(() => {
        console.log("yolo")
    }, 1000)
}

//"A Number, representing the ID value of the timer that is set."

let ans = showCounter()

console.log(ans)
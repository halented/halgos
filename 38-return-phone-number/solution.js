function formatPhoneNumber(arr) {
    if (arr.length > 10 || arr.length < 10) { return "Invalid input" }
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6, 10).join('')}`
}


console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
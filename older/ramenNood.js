

const determine = (str) => {
    let hashy = {"I": 1, "IV": 4,"V": 5,"IX": 9,"X": 10,"XL": 40,"L": 50,"XC": 90,"C": 100,"CD": 400,"D": 500,"CM": 900,"M": 1000}

    if(str.length === 1 && hashy[str]){
        console.log(hashy[str])
        return
    }
    else if (str.length>1) {
        let val = 0;
        while(str.length>0){
            if(hashy[`${str[0]}${str[1]}`]) {
                val += hashy[`${str[0]}${str[1]}`]
                str = str.slice(2)
            }
            else {
                val += hashy[str[0]]
                str = str.slice(1)
            }
        }
        console.log(val)
        return
    }
    else console.log("Invalid input")
}

determine("MMCCCXCVIII")
const sortByLength = (arr) => {
    return arr.sort((a, b) => a.length - b.length)
}

const sortByDate = (arr) => {
    return arr.sort((a, b) => a.date - b.date)
}

const arr1 = [
    {
        "title": "Breaker",
        "length": 527,
        "date": "2012-01-10"
    },
    {
        "title": "Figure",
        "length": 120,
        "date": "2012-02-05"
    },
    {
        "title": "As If",
        "length": 700,
        "date": "2012-03-10"
    },
    {
        "title": "Reign It In",
        "length": 98,
        "date": "2012-05-27"
    },
    {
        "title": "Sparks Flute",
        "length": 136,
        "date": "2013-01-05"
    },
    {
        "title": "Greener Garden, Greater Guard",
        "length": 104,
        "date": "2015-08-15"
    }
]
// console.log(sortByLength(arr1))
console.log(sortByDate(arr1))

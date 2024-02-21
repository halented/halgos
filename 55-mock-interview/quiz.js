/**
Write a simple program that can turn Spanish <> English words  into a quiz! 

Input: a JSON of Spanish, English word pair
[
  {"en": "dog", "es": "perro"},
  {"en": "cat", "es": "gato"},
  {"en": "pet", "es": "mascota"}
]

Output: JSON of a quiz consists of questions
[
  {"question": "cat", "options": ["mascota", "gato", "perro"], "answer": "gato"},
  {"question": "dog", "options": ["mascota", "gato", "perro"], "answer": "perro"}
]

-- stretch goal would be to add an optionally specified "options" amount, eg 3,4,5 etc
 */

const input = JSON.stringify({
    "data": [
        { "en": "dog", "es": "perro" },
        { "en": "cat", "es": "gato" },
        { "en": "pet", "es": "mascota" }
    ]
});

const quizGenerator = (json) => {
    // return obj format: {question: string, options: string[], answer: string}
    let parsed = JSON.parse(json).data
    let output = parsed.map((w, i) => {
        let quizItem = { "question": w.en, "options": [w.es], "answer": w.es }
        // this part ugly as hell lol
        let j = Math.floor(Math.random() * parsed.length);
        while (j === i) {
            j = Math.floor(Math.random() * parsed.length);
        }
        let k = i;
        while (k === i || k === j) {
            k = Math.floor(Math.random() * parsed.length);
        }
        quizItem.options.push(parsed[k].es, parsed[j].es)
        return quizItem
    })
    return JSON.stringify({ "data": output })
}

console.log(quizGenerator(input));

/**
 * 1. put the question (en) and answer (es) in the obj
 * 2. put the answer in the options
 * 
 * options for options (O4O):
 * 1. iterate forward and put "es" words go into the options array for the next two input items
 *      => problems being that this is predictable, not really good for testing smart students who may find the pattern
 * 2. pick two random numbers using Math.random, grab the es words and toss em in the options array
 *      => kinda like this, it's super simple and not replicable. but, it wouldn't guarantee that all questions receive like the same options. as a first pass let's just do that
 */
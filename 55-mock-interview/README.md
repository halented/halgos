There is a new undocumented language which happens to use our latin alphabet. The order of the latin letters is unknown to you, but you magically receive a dictionary of the words. The dictionary is sorted by the rules of this new language.  Write an algorithm to derive the order of letters in this language.
You can assume the input is correct and complete. As it's easy to have an invalid input, invalid inputs can simply error out.

Example (ordered) input:
 ["wrt", "wrf", "er", "ett", "rftt"]
    => ['w', 'e', 'r', 't', 'f']

Expected: what’s the alphabetical order of the language?
[“a”, “all”, “at”] = > a,l,t
 => output is a string “abc”
=> also acceptable, “a,b,c”

wer => do the first letter of each “word” first
can only compare letters which are NOT the first letter, if multiple “words” start with the same letter. ex: ‘be’ and ‘bun’ tells you the order of e and u, but ‘ce’ and ‘fun’ tells you NOTHING
iterate through matching words
you HAVE to compare characters, comparing a character with a null does not give info


```javascipt
// [“al”, “alze”,“altrt”] = > a,l,t
const compare = (leftword, rightword) => {
	// returns two letters which we are certain are in the correct order OR null
	// iterate over each word simultaneously until we hit a letter which doesn’t match. 
	// ORDER MATTERS. 
	let i = 0
	let j = 0
	while (leftword[i] === rightword[j]){
		i++;
		j++;
	}
	if(leftword[i] && rightword[j]) {
		return { leftword[i]: 1 rightword[j]: 1 };
	}
return null;
}

/**
* arr - ordered, completed undocumented language dictionary example
/
const alpahbeteering = (arr) => {
let ordered = new Set;
for (let i=0;i<arr.length;i++) {
ordered.add([arr[i][0])])
}
// now we have a small ordered set
// determine which words start with the same letter

for (let i=0; i<arr.length; i++) {
	if(arr[i][0] === arr[i+1][0] && word.length > 2 for each) {
		// we have two that start with the same letter and are more than one character
		const additionToAlphabet: null || set = compare(word1, word2);
if additionToAlphabet {
	// insert it into the existing set
	// find a matching letter??
}
}
}
};


```

 ["wrt", "wrf", "er", "ett", "rftt"]

// step 1
smallOrdered: [w,e,r]

// step 2
letterSets:
[t,f]
[r,t]

// step 3 combine “likes”
[r,t,f]

// step 4 bring in smallOrdered
[w,e,r,t,f]


 ["baa", "abcd", "abca", "cab", "cad"]
// step 1
smallOrdered: [b,a,c]

// step 2
letterSets:
[d, a]
[b, d]

// step 3 combine “likes”
//[b, d, a]

// step 3 bring in smallOrdered
[b,a,c] + [d, a]
	=> [b,d,a,c]
[b,d,a,c] + [b, d]
	=> [b,d,a,c]





Don’t look until you want to
Answer options
https://pantas.net/alien_dictionary/
https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/ 






Coding question 2
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


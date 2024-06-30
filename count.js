const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
    If this be error and upon me proved,
    I never writ, nor no man ever loved.`;

/*
// Plain Object Method
// Unique words
let uniques = {};
// All words in the text
let words = sonnet.match(/[\w']+/g);

// Iterate through 'words' and build up an associative array of unique words.
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (uniques[word]) {
        uniques[word] += 1;
    } else {
        uniques[word] = 1;
    }
}

console.log(uniques);
*/

//Tutorial hint of combining Map and Object
/*
let uniques = new Map();
uniques.set("loved", 0);
let currentValue = uniques.get("loved");
uniques.set("loved", currentValue + 1);
*/

// Map() Object Method
// Unique words
let mapUniques = new Map();
// All words in string
let words = sonnet.match(/[\w']+/g);

// Iterate through 'words' and build up an associative array of unique words.
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let currentValue = mapUniques.get(word);
    if (mapUniques.get(word)) {
        mapUniques.set(word, currentValue + 1);
    } else {
        mapUniques.set(word, 1);
    }
}

console.log(mapUniques);

/*
The program is for extracting all unique words in a string and counting each
instance of the word.

Plain Object version:
The initial condition of the for loop sets a counter to increment up a word
until it hits the end of the string. A word is determined by the regex in
the String#match method in variable 'words'. Within the loop a variable is
set for an individual word within the array created from the match method in
'words'. If the word exists, then the condition of the 'if' statement
is true. If the word already exists, which is to say if the condition is
true, then the count for that word increases by 1. If the condition is false
then the word is put in the 'uniques' object. Afterward the content of the
'uniques' object is printed to the screen.

Map Object version:
The same initial counter is set for the loop, to increment up by a word
until the end of the string. A variable is set to an individual word which
is determined by the regex in 'words'. Another variable (currentValue) is
set to retrieve a word using the Object#get method. This method returns a
boolean true or false. Now that boolean result is used as a conditional for
the 'if' loop. If the condition is true then the word count is incremented
up by 1 using the Object#set method. If the conditional is false, the loop
uses the Object#set method to set the count to 1. After the looop executes
then the result of the Map object is printed to the screen.
*/

// Declaring the lists using array
//column 1
const subjects = ["The crane", "Miss", "Dad", "The dog", "My friend"];
//column 2
const verbs = ["ate", "saw", "walked with","hugged", "couldn't find"];
//column 3
const adjectives = ["a giant", "a magical", "a tiny", "a spooky", "a slimy"];
//column 4
const objects = ["frog", "sandals", "pizza", "banana", "table"];
//column 5
const places =["in the park", "on my bed", "under the table", "at school", "in space"];

// Returning a random element from the arrays
function getRandomItem (array) {
    let randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
};

// Retrieving each button and spin using the ids
let spin1 = document.getElementById("spin1");
let spin2 = document.getElementById("spin2");
let spin3 = document.getElementById("spin3");
let spin4 = document.getElementById("spin4");
let spin5 = document.getElementById("spin5");

// Display the slots assigned the button
let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let slot4 = document.getElementById("slot4");
let slot5 = document.getElementById("slot5");

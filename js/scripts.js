// Defining arrays of words for each slot in the columns
//column 1
const subjects = ["The King", "This girl", "The book", "The dog", "My friend"];
//column 2
const verbs = ["ate", "saw", "slept","hugged", "thought"];
//column 3
const adjectives = ["a giant", "a magical", "a dirty", "a spooky", "a scruffy"];
//column 4
const objects = ["frog", "sandals", "pizza", "banana", "table"];
//column 5
const places =["in the park", "on my bed", "under the table", "at church", "at the bottom"];

// Get a random element from an array
function getRandomItem (array) {
    let randomItem = Math.floor(Math.random() * array.length);
    return array[randomItem];
};

// Get the elements for slots and spin the buttons
let slots = [];
let spinButtons = [];
for (let i = 1; i <= 5; i++) {
    slots.push(document.getElementById(`slot${i}`));
    spinButtons.push(document.getElementById(`spin${i}`));
};

// Function to spin the button with a loop and a corresponding word list
let wordLists = [subjects, verbs, adjectives, objects, places];
for (let i = 0; i < spinButtons.length; i++) {
    spinButtons[i].addEventListener("click", function() {
        let currentWordList = wordLists[i];
        let randomWord = getRandomItem(currentWordList);
        slots[i].textContent = randomWord;
    });
}

// Function to generate the full sentence
let tellStoryBtn = document.getElementById("tellStory");
let storyOutput = document.getElementById("storyOutput");

tellStoryBtn.addEventListener("click", function() {
    for (let i = 0; i < slots.length; i++) {
        if (!slots[i].textContent) {
            storyOutput.textContent = "Please spin all slots to create a story!";
            return;
        };
    };

    // Loop through the story string
    let story = "";
    for (let i = 0; i < slots.length; i++) {
        story += slots[i].textContent + (i === slots.length - 1 ? " . " : " ");
    }
    // Display the entire story
    storyOutput.textContent = story;
});
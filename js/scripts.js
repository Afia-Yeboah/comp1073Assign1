// Defining arrays of words for each slot in the columns
//column 1
const subjects = ["The King", "This girl", "The book", "The dog", "My friend"];
//column 2
const verbs = ["ate", "saw", "created","hugged", "thought"];
//column 3
const adjectives = ["a giant", "a magical", "a dirty", "a spooky", "a scruffy"];
//column 4
const objects = ["frog", "sandals", "pizza", "banana", "table"];
//column 5
const places =["in the park", "on my bed", "under the table", "at church", "at the bottom"];

// Get a random element from an array
function getRandomItem (array) {
    let randomWord = array[Math.floor(Math.random() * array.length)];
    return randomWord;
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

// Add a prevent default action to the button
tellStoryBtn.addEventListener("click",()=> {
    let storyComplete = true;

    // Check if all slots have been filled
    for (let i = 0; i < slots.length; i++) {
        if (!slots[i].textContent) {
            storyComplete = false;
            // Highlight filled slots
            slots[i].style.border = "3px solid red"; 
        } else {
            // Remove highlight if filled
            slots[i].style.border = "";
        };
    };

    if (!storyComplete) {
        // If any slot is empty, alert the user
        storyOutput.textContent = "Please spin all slots to tell story!";
        storyOutput.style.color = "red";
        return; 
    };
    
    // If all slots are filled, generate the story
    // Concatenate the text content of each slot to form the story
    let story = "";
    for (let i = 0; i < slots.length; i++) {
        story += slots[i].textContent + (i === slots.length - 1 ? "." : " ");
    }
    // Display the entire story
    storyOutput.textContent = story;
});

// Reset the slots and story output
function resetSlots() {
    for (let i = 0; i < slots.length; i++) {
        slots[i].textContent = "";
        slots[i].style.border = ""; // Remove any border styles
    }
    storyOutput.textContent = "";
}

// Add event listener to the reset button
let resetButton = document.getElementById("resetSlots");
resetButton.addEventListener("click", resetSlots);

// Using hover, focus effect on spinning the buttons
for (let btn of spinButtons) {
    btn.addEventListener("mouseover", () => {
        btn.style.border = "2px solid yellow";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.border = "";
    });
    btn.addEventListener("focus", () => {
        btn.style.border = "3px solid blue";
    });
}
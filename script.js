const quests = [
    "Clap your hands 3 times and spin around",
    "Jump up and down 5 times",
    "Do a funny dance for 10 seconds",
    "Sing a song loudly",
    "Run in place for 15 seconds",
    "Give a high-five to someone near you",
    "Do 10 jumping jacks",
    "Pretend to be a robot for 20 seconds",
    "Make a silly face and hold it for 10 seconds",
    "Balance on one foot for 10 seconds",
    "Take a selfie on someone you just met",
    "Find something blue and show it to everyone",
    "Share a compliment with the person next to you",
    "Find someone with the same initials as you",
    "Tell a funny joke to make me laugh",
    "Give a high-five to three different people"
];

function generateQuest() {
    const randomIndex = Math.floor(Math.random() * quests.length);
    const quest = quests[randomIndex];
    document.getElementById("quest").innerText = quest;
    localStorage.setItem("storedQuest", quest);
    hideQuestButton(); // Hide quest generation button
}

function displayStoredQuest() {
    const storedQuest = localStorage.getItem("storedQuest");
    if (storedQuest) {
        document.getElementById("quest").innerText = storedQuest;
        hideQuestButton(); // Hide quest generation button
    }
}

function hideQuestButton() {
    document.getElementById("questButton").style.display = "none";
}

function toggleQuestButton() {
    const password = prompt("Enter the password to toggle quest generation:");
    if (password === "lutsnpc2024") {
        const questButton = document.getElementById("questButton");
        questButton.style.display = questButton.style.display === "none" ? "block" : "none";
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// Generate a quest when the page loads, if one is stored
window.onload = displayStoredQuest;

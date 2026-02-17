const runGame = function() {
    // Your code additions go here

    const team1 = prompt("Enter Team 1 name:");
    const score1 = Number(prompt("Enter " + team1 + "'s score:"));
    const team2 = prompt("Enter Team 2 name:");
    const score2 = Number(prompt("Enter " + team2 + "'s score:"));

    let result;

    if (score1 > score2) {
        result = team1 + " won " + score1 + " to " + score2 + ".";
    } else if (score2 > score1) {
        result = team2 + " won " + score2 + " to " + score1 + ".";
    } else {
        result = "It's a tie: " + score1 + " to " + score2 + ".";
    }

    // Code that adds a new paragraph with a string to the "div" in the HTML file 
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = result;
    divId.appendChild(newPara);
}

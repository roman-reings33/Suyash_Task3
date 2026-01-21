function createProfile() {
    // Taking user inputs
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    let profession = prompt("Enter your profession (Student / Working / Other):");

    let ageMessage = "";
    let professionMessage = "";

    // Condition based on age
    if (age < 18) {
        ageMessage = "You are a minor. Enjoy learning and growing!";
    } else if (age >= 18 && age <= 25) {
        ageMessage = "You are a young adult. Build your future wisely!";
    } else if (age > 25 && age <= 60) {
        ageMessage = "You are in your productive working years.";
    } else {
        ageMessage = "You have valuable life experience.";
    }

    // Condition based on profession
    if (profession.toLowerCase() === "student") {
        professionMessage = "Keep focusing on education and skill-building.";
    } else if (profession.toLowerCase() === "working") {
        professionMessage = "Your dedication is shaping your career.";
    } else {
        professionMessage = "Explore different opportunities ahead.";
    }

    // Display output
    document.getElementById("result").innerHTML =
        `Hello <b>${name}</b>! <br>
         ${ageMessage} <br>
         ${professionMessage}`;
}

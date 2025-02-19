function Strength(password) {
    let i = 0;
    let suggestion = [];

    if (password.length > 6) {
        i++;
    } else {
        suggestion.push("Use at least 7 characters.");
    }

    if (password.length >= 10) {
        i++;
    } else {
        suggestion.push("Use at least 10 characters for better security.");
    }

    if (/[A-Z]/.test(password)) {
        i++;
    } else {
        suggestion.push("Add at least one uppercase letter.");
    }

    if (/[0-9]/.test(password)) {
        i++;
    } else {
        suggestion.push("Include at least one number.");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        i++;
    } else {
        suggestion.push("Use at least one special character (e.g., !, @, #, $).");
    }

    return { strength: i, suggestions: suggestion.join(" ") };
}

let container = document.querySelector(".container");
let suggestionText = document.createElement("p");
suggestionText.classList.add("suggestion");
container.appendChild(suggestionText);

document.addEventListener("keyup", function () {
    let password = document.querySelector("#YourPassword").value;
    let { strength, suggestions } = Strength(password);

    if (strength <= 2) {
        container.classList.add("weak");
        container.classList.remove("moderate", "strong");
        suggestionText.textContent = "Suggestions: " + suggestions;
    } else if (strength >= 2 && strength <= 4) {
        container.classList.remove("weak");
        container.classList.add("moderate");
        container.classList.remove("strong");
        suggestionText.textContent = "Suggestions: " + suggestions;
    } else {
        container.classList.remove("weak", "moderate");
        container.classList.add("strong");
        suggestionText.textContent = ""; // No suggestions needed for strong passwords
    }
});

let password = document.querySelector("#YourPassword");
let show = document.querySelector(".show");
show.onclick = function () {
    if (password.type === "password") {
        password.setAttribute("type", "text");
        show.classList.add("hide");
    } else {
        password.setAttribute("type", "password");
        show.classList.remove("hide");
    }
};

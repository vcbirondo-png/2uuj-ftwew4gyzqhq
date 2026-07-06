// ==========================
// Live Date & Time
// ==========================

function updateDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString("en-US", dateOptions);
    }

    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString("en-US", timeOptions);
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();


// ==========================
// Greeting Message
// ==========================

const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {
    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "☀️ Good Morning! Ready to Study?";
    } else if (hour < 18) {
        greeting = "📚 Good Afternoon! Stay Focused!";
    } else {
        greeting = "🌙 Good Evening! Keep Learning!";
    }

    heroTitle.textContent = greeting;
}
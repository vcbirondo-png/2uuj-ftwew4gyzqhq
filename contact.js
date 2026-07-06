const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            e.preventDefault();
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            e.preventDefault();
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            e.preventDefault();
            return;
        }

        alert("Message sent successfully!");
    });
}
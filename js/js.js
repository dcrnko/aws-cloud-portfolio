const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://qsl325knfxo2bsg5d5mbueokqu0cqmqk.lambda-url.eu-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `my portfolio has: <b>${data}</b> views`;
}
updateCounter();

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Form Data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Mailto to send email
    window.location.href = `mailto:pooleno@gmail.com?subject=Contact%20Form%20Message&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
});

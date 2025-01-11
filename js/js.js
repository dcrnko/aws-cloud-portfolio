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


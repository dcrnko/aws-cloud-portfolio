const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://qsl325knfxo2bsg5d5mbueokqu0cqmqk.lambda-url.eu-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `my portfolio has: <b>${data}</b> views`;
}
updateCounter();

document.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer");
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= pageHeight - 10) { 
      footer.style.bottom = "0"; // Show footer
  } else {
      footer.style.bottom = "-100px"; // Hide footer
  }
});


const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://qsl325knfxo2bsg5d5mbueokqu0cqmqk.lambda-url.eu-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` the portfolio has ${data} views`;
}

updateCounter();


function toggleContent(post) {
  const content = post.querySelector('.blog-content');
  if (content.style.display === "none") {
    content.style.display = "block"; // Show content
  } else {
    content.style.display = "none"; // Hide content
  }
}



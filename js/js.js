document.getElementById('toggleLink').addEventListener('click', function(e) {
  e.preventDefault();
  const section = document.getElementById('toggleSection');
  
  if (section.style.display === 'none' || section.style.display === '') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});
function scrollToNextSection() {
  document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
}

function toggleContent(post) {
  const content = post.querySelector('.blog-content');
  if (content.style.display === "none") {
    content.style.display = "block"; // Show content
  } else {
    content.style.display = "none"; // Hide content
  }
}

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://c6wbwoqerqnmuuoxkeluqvmhni0jnwsk.lambda-url.eu-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();

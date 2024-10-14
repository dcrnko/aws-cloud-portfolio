const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://qsl325knfxo2bsg5d5mbueokqu0cqmqk.lambda-url.eu-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` my portfolio has: <b>${data}</b> views`;
}

updateCounter();

// Function to scroll down to the next section
document.getElementById('scrollButton').addEventListener('click', function() {
  // Get the second section's position
  const section2 = document.getElementById('my-experience');
  section2.scrollIntoView({ behavior: 'smooth' });
});



function toggleContent(post) {
  const content = post.querySelector('.blog-content');
  if (content.style.display === "none") {
    content.style.display = "block"; // Show content
  } else {
    content.style.display = "none"; // Hide content
  }
}

// Select all elements inside the container you want to fade in/out
const fadeInContents = document.querySelectorAll('.fade-in-content');

// Use IntersectionObserver to detect when each element is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'show' class when the content comes into view
            entry.target.classList.add('show');
        } else {
            // Remove the 'show' class when content goes out of view
            entry.target.classList.remove('show');
        }
    });
});

// Observe each element inside the container
fadeInContents.forEach(content => {
    observer.observe(content);
});

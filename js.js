document.addEventListener('DOMContentLoaded', function() {
    // Navigation links smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // <- Correct method

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});



    // Update view counter
    const counter = document.querySelector(".counter-number");
    async function updateCounter() {
        let response = await fetch(
            "https://qsl325knfxo2bsg5d5mbueokqu0cqmqk.lambda-url.eu-central-1.on.aws/"
        );
        let data = await response.json();
        counter.innerHTML = ` my portfolio has <b>${data}</b> views`;
    }
    updateCounter();
    // Update view counter END

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

// Function to update the modal theme
function updateModalTheme() {
    if (body.classList.contains('light-theme')) {
        modal.style.backgroundColor = 'white';
        modal.style.color = 'black';
        modalClose.style.color = 'black'; // Close button in light theme
    } else {
        modal.style.backgroundColor = 'black';
        modal.style.color = 'white';
        modalClose.style.color = 'white'; // Close button in dark theme
    }
}

// Theme Toggle Event Listener
if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        // Toggle the 'light-theme' class on the body
        body.classList.toggle('light-theme');

        // Update the theme toggle button's text or icon
        if (body.classList.contains('light-theme')) {
            themeToggle.textContent = '☽'; // Moon icon for light theme
        } else {
            themeToggle.textContent = '☼'; // Sun icon for dark theme
        }

        // Update modal theme whenever the theme is toggled
        updateModalTheme();
    });
}

    // Modal functionality
    const detailsButtons = document.querySelectorAll('.details-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    // Open modal and load content from HTML file
    detailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const file = button.getAttribute('data-file');
            const title = button.getAttribute('data-title');

            // Load the HTML content from the file
            fetch(file)
                .then(response => response.text())
                .then(content => {
                    // Set the modal title and content
                    modalTitle.textContent = title;
                    modalText.innerHTML = content; // Load HTML content

                    // Open the modal and overlay
                    modal.classList.add('open');
                    modalOverlay.classList.add('open');
                })
                .catch(err => {
                    console.error('Error loading file:', err);
                });
        });
    });

    // Close modal when close button or overlay is clicked
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    function closeModal() {
        modal.classList.remove('open');
        modalOverlay.classList.remove('open');
    }

    // Ensure modal theme is correct when page is loaded
    updateModalTheme();





    // Contact Form Functionality
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const emailError = document.getElementById('email-error');

        // Email validation using a simple regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            return;
        } else {
            emailError.textContent = ""; // Clear any previous error
        }

        const email = emailInput.value;
        const message = messageInput.value;

        // Basic email sending using mailto link (opens the user's email client)
        const mailtoLink =
            `mailto:crnkodav@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(message)}&cc=${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;

        // Clear the form fields after "sending"
        emailInput.value = "";
        messageInput.value = "";

        // You can add a confirmation message or redirect here if needed
        alert("Your message has been sent!");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const footer = document.querySelector('footer');

    if (backToTopButton && footer) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const footerTop = footer.getBoundingClientRect().top + window.scrollY;

            if (scrollTop + windowHeight >= footerTop) {
                backToTopButton.style.opacity = 1; // Show the button
            } else {
                backToTopButton.style.opacity = 0; // Hide the button
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
    // Simple intersection observer to trigger fade-in
    const faders = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fade in only once
        }
      });
    });

    faders.forEach(fade => observer.observe(fade));
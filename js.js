document.addEventListener('DOMContentLoaded', function() {
    // Navigation links smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

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

    // Blog and Projects Functionality

    const body = document.body;
    const modalText = document.getElementById('modal-text');
    const loadMoreButton = document.querySelector('.load-more');
    const previews = document.querySelectorAll('.preview');
    const themeToggle = document.getElementById('theme-toggle');

    document.addEventListener("DOMContentLoaded", function() {
        const modal = document.getElementById("modal");
        const closeBtn = document.getElementById("close");
        const detailsButton = document.querySelector(".details-button");
    
        detailsButton.addEventListener("click", function() {
            modal.style.display = "flex";
        });
    
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });
    
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
    
    

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            previews.forEach((preview, index) => {
                if (index >= 3) {
                    preview.classList.toggle('mobile-hidden');
                }
            });
            if (loadMoreButton.textContent === 'Load More') {
                loadMoreButton.textContent = 'Load Less';
            } else {
                loadMoreButton.textContent = 'Load More';
            }
        });
    }

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

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        updateModalTheme(); // Update modal theme on toggle
    });

    function updateModalTheme() {
        const modal = document.getElementById('modal');
        if (body.classList.contains('light-theme')) {
            modal.style.backgroundColor = 'white';
            modal.style.color = 'black';
            document.getElementById('modal-close').style.color = 'black';
        } else {
            modal.style.backgroundColor = 'black';
            modal.style.color = 'white';
            document.getElementById('modal-close').style.color = 'white';
        }
    }

    updateModalTheme(); //sets the correct modal theme on page load.
});
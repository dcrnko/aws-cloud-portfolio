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

    // Blog and Projects Functionality (Corrected)
    const detailsButtons = document.querySelectorAll('.details-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.getElementById('modal-close');
    const previews = document.querySelectorAll('.preview');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            modalTitle.textContent = this.getAttribute('data-title');
            const filePath = this.getAttribute('data-file');
            const dataContent = this.getAttribute('data-content');
            if (filePath) {
                fetch(filePath)
                    .then(response => response.text())
                    .then(text => {
                        modalText.innerHTML = text;
                    })
                    .catch(error => {
                        console.error('Error fetching file:', error);
                    });
            } else if (dataContent) {
                modalText.innerHTML = dataContent;
            }
            modalOverlay.style.display = 'block';
            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', function() {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
            modal.style.display = 'none';
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modalOverlay.style.display = 'none';
            modal.style.display = 'none';
        }
    });

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
            document.getElementById('close').style.color = 'black'; // Corrected ID
        } else {
            modal.style.backgroundColor = 'black';
            modal.style.color = 'white';
            document.getElementById('close').style.color = 'white'; // Corrected ID
        }
    }

    updateModalTheme(); //sets the correct modal theme on page load.
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
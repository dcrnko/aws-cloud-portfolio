document.addEventListener('DOMContentLoaded', function () {
    // Navigation links smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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





    const themeToggle = document.getElementById('theme-toggle');
    // Theme Toggle Functionality (Keeping it as is, assuming it works)
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            body.classList.toggle('dark-theme');
            if (body.classList.contains('dark-theme')) {
                themeToggle.textContent = '☽';
            } else {
                themeToggle.textContent = '☼';
            }
        });
    }


    // Modal
    const detailsButton = document.querySelector('.details-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    // Open modal on button click
    detailsButton.addEventListener('click', function () {
        const title = this.getAttribute('data-title');
        const file = this.getAttribute('data-file');

        // Fetch HTML content from the file (HTML formatted content)
        fetch(file)
            .then(response => response.text())
            .then(content => {
                modalTitle.textContent = title;  // Set modal title
                modalText.innerHTML = content;  // Set HTML content

                // Show modal and overlay
                modalOverlay.style.display = 'block';
                modal.style.display = 'block';
            })
            .catch(error => {
                modalTitle.textContent = 'Error';
                modalText.textContent = 'Failed to load content.';
            });
    });

    // Close modal when clicking on close button or overlay
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Function to close the modal
    function closeModal() {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
    }

    // Contact Form Functionality
    document.getElementById('contact-form').addEventListener('submit', function (event) {
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
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    const footer = document.querySelector('footer');

    if (backToTopButton && footer) {
        window.addEventListener('scroll', function () {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const footerTop = footer.getBoundingClientRect().top + window.scrollY;

            if (scrollTop + windowHeight >= footerTop) {
                backToTopButton.style.opacity = 1; // Show the button
            } else {
                backToTopButton.style.opacity = 0; // Hide the button
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
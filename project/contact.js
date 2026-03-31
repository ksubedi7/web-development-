document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent actual submission
            
            // Get fields
            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const messageField = document.getElementById("message");
            
            // Get error text divs
            const nameError = document.getElementById("name-error");
            const emailError = document.getElementById("email-error");
            const messageError = document.getElementById("message-error");
            const successMessage = document.getElementById("success-message");
            
            // Reset errors
            nameError.style.display = "none";
            emailError.style.display = "none";
            messageError.style.display = "none";
            successMessage.style.display = "none";
            
            let isValid = true;
            
            // Validate Name
            if (nameField.value.trim() === "") {
                nameError.style.display = "block";
                isValid = false;
            }
            
            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value.trim())) {
                emailError.style.display = "block";
                isValid = false;
            }
            
            // Validate Message
            if (messageField.value.trim() === "") {
                messageError.style.display = "block";
                isValid = false;
            }
            
            // If valid, show success message and clear form
            if (isValid) {
                successMessage.style.display = "block";
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 5000);
            }
        });
    }
});

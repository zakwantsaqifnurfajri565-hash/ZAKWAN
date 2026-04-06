// EmailJS Configuration - Replace these with your actual values
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Get this from EmailJS dashboard

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const formData = {
                visitor_name: contactForm.querySelector('input[name="visitor_name"]').value,
                visitor_email: contactForm.querySelector('input[name="visitor_email"]').value,
                subject: contactForm.querySelector('input[name="subject"]').value,
                message: contactForm.querySelector('textarea[name="message"]').value,
                to_email: "zakwantsaqifnurfajri858@gmail.com" // Your email
            };

            // Basic validation
            if (formData.visitor_name && formData.visitor_email && formData.subject && formData.message) {
                // Show loading state
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Send email via EmailJS
                emailjs.send(
                    "YOUR_SERVICE_ID_HERE",      // Replace with your EmailJS service ID
                    "YOUR_TEMPLATE_ID_HERE",     // Replace with your EmailJS template ID
                    formData
                ).then(function(response) {
                    console.log('Email sent successfully!', response);
                    alert('Thank you! Your message has been sent successfully. I will get back to you soon.');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }).catch(function(error) {
                    console.error('Failed to send email:', error);
                    alert('Failed to send message. Please try again later.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            } else {
                alert('Please fill all fields');
            }
        });
    }
});
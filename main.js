var typed = new Typed(".text-hero", {
        strings: ["Web Developer", "Frontend Developer", "YouTuber"],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1200,
        loop: true
});

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            navbar.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar.contains(event.target);
            const isClickInsideHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickInsideHamburger && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
});

// EmailJS Configuration - Ganti dengan kode asli Anda
emailjs.init("KODE_PUBLIC_KEY_ANDA"); // Dari EmailJS Account → General

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
                to_email: "zakwantsaqifnurfajri858@gmail.com"
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
                    "SERVICE_ID_ANDA",      // Dari EmailJS Email Services
                    "TEMPLATE_ID_ANDA",     // Dari EmailJS Email Templates
                    formData
                ).then(function(response) {
                    console.log('Email sent successfully!', response);
                    alert('Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda.');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }).catch(function(error) {
                    console.error('Failed to send email:', error);
                    alert('Gagal mengirim pesan. Silakan coba lagi nanti atau hubungi langsung via email.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            } else {
                alert('Mohon isi semua field');
            }
        });
    }
});
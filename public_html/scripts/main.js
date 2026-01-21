/**
 * Math and Language Synergy Website Script
 * Main functionality for interactive elements
 */

// Document ready handler
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Initialize mobile navigation toggle
     * Toggles the mobile navigation menu when the hamburger button is clicked
     */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    /**
     * Program category tab functionality
     * Switches between different program categories when tabs are clicked
     */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const programCategories = document.querySelectorAll('.program-category');
    
    if (tabButtons.length > 0 && programCategories.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons and categories
                tabButtons.forEach(btn => btn.classList.remove('active'));
                programCategories.forEach(cat => cat.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding category
                const categoryId = this.getAttribute('data-category');
                const targetCategory = document.getElementById(`${categoryId}-programs`);
                
                if (targetCategory) {
                    targetCategory.classList.add('active');
                }
            });
        });
    }
    
    /**
     * Contact form submission handler
     * Handles form validation and submission (simulated)
     */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, this would send data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    /**
     * Newsletter subscription handler
     * Handles newsletter form submission (simulated)
     */
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        const newsletterInput = newsletterForm.querySelector('input');
        const newsletterButton = newsletterForm.querySelector('button');
        
        newsletterButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, this would send data to a server
            alert('Thank you for subscribing to our newsletter!');
            newsletterInput.value = '';
        });
    }
    
    /**
     * Update current year in footer
     * Dynamically updates the copyright year to always show the current year
     */
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
    
    /**
     * Smooth scrolling for anchor links
     * Adds smooth scrolling behavior to all anchor links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if href is just "#"
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate position considering fixed header
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /**
     * Add scroll effect to navbar
     * Changes navbar appearance on scroll
     */
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    /**
     * Initialize scroll position for navbar
     */
    window.dispatchEvent(new Event('scroll'));
    
    console.log('Math and Language Synergy website initialized successfully.');
});
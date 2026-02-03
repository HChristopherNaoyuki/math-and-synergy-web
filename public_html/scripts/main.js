/**
 * Math and Language Synergy Website Script
 * Main functionality for interactive elements
 */
// Document ready handler
document.addEventListener('DOMContentLoaded', function()
{
    /**
     * Initialize mobile navigation toggle
     * Toggles the mobile navigation menu when the hamburger button is clicked
     */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu)
    {
        navToggle.addEventListener('click', function()
        {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active'))
            {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
            else
            {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link =>
        {
            link.addEventListener('click', function()
            {
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
    
    if (tabButtons.length > 0 && programCategories.length > 0)
    {
        tabButtons.forEach(button =>
        {
            button.addEventListener('click', function()
            {
                // Remove active class from all buttons and categories
                tabButtons.forEach(btn => btn.classList.remove('active'));
                programCategories.forEach(cat => cat.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding category
                const categoryId = this.getAttribute('data-category');
                const targetCategory = document.getElementById(`${categoryId}-programs`);
                
                if (targetCategory)
                {
                    targetCategory.classList.add('active');
                }
            });
        });
    }
    
    /**
     * Contact form submission handler
     * Handles form validation, creates a JSON object from input data, triggers a download of the JSON file,
     * and shows a success message. The file is named in the format Data/contact-[ISO-timestamp].json to simulate
     * saving in a "Data" folder (client-side download due to browser restrictions).
     */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm)
    {
        contactForm.addEventListener('submit', function(e)
        {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message)
            {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email))
            {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Create JSON object with form data and timestamp
            const formData = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date().toISOString()
            };
            
            // Create Blob from JSON string
            const jsonString = JSON.stringify(formData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            
            // Create downloadable link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Data/contact-${formData.timestamp.replace(/:/g, '-')}.json`;  // Replace : with - for filename compatibility
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show success message and reset form
            alert('Thank you for your message! It has been saved as a JSON file. We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    /**
     * Newsletter subscription handler
     * Handles validation, creates a JSON object from email, triggers a download of the JSON file,
     * and shows a success message. The file is named in the format Data/subscription-[ISO-timestamp].json.
     */
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm)
    {
        const newsletterInput = newsletterForm.querySelector('input');
        const newsletterButton = newsletterForm.querySelector('button');
        
        newsletterButton.addEventListener('click', function(e)
        {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (!email)
            {
                alert('Please enter your email address.');
                return;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email))
            {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Create JSON object with email and timestamp
            const subData = {
                email: email,
                timestamp: new Date().toISOString()
            };
            
            // Create Blob from JSON string
            const jsonString = JSON.stringify(subData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            
            // Create downloadable link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Data/subscription-${subData.timestamp.replace(/:/g, '-')}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show success message and clear input
            alert('Thank you for subscribing to our newsletter! Your subscription has been saved as a JSON file.');
            newsletterInput.value = '';
        });
    }
    
    /**
     * Update current year in footer
     * Dynamically updates the copyright year to always show the current year
     */
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement)
    {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
    
    /**
     * Smooth scrolling for anchor links
     * Adds smooth scrolling behavior to all anchor links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    {
        anchor.addEventListener('click', function(e)
        {
            // Skip if href is just "#"
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement)
            {
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
    window.addEventListener('scroll', function()
    {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50)
        {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        }
        else
        {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    /**
     * Initialize scroll position for navbar
     */
    window.dispatchEvent(new Event('scroll'));
    
    console.log('Math and Language Synergy website initialized successfully.');
});
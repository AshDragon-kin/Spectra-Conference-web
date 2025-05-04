// Form handling
document.addEventListener('submit', async (e) => {
    if (e.target.matches('form')) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate form submission
        try {
            // Show loading state
            const submitButton = e.target.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Processing...';
            submitButton.disabled = true;

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'mt-4 p-4 bg-green-100 text-green-700 rounded-md';
            successMessage.textContent = 'Form submitted successfully!';
            e.target.appendChild(successMessage);

            // Reset form
            e.target.reset();

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            const errorMessage = document.createElement('div');
            errorMessage.className = 'mt-4 p-4 bg-red-100 text-red-700 rounded-md';
            errorMessage.textContent = 'An error occurred. Please try again.';
            e.target.appendChild(errorMessage);

            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
        }
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden p-2';
    mobileMenuButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    `;

    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('.md\\:flex');
    
    // Insert mobile menu button
    nav.querySelector('.flex').appendChild(mobileMenuButton);

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('shadow-lg');
        navLinks.classList.toggle('p-4');
    });
}); 
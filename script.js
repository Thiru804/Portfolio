document.addEventListener('DOMContentLoaded', () => {

    // Select all content sections to animate
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'show' class to make it visible
                entry.target.classList.add('show');
                
                // Stop observing the element once it's shown
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing each content section
    sections.forEach(section => {
        section.classList.add('hidden'); // Start all sections as hidden
        observer.observe(section);
    });
});

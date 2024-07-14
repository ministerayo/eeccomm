document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth page transition effect on load
    document.body.style.opacity = 0;
    window.setTimeout(() => {
        document.body.style.opacity = 1;
    }, 0);

    // Newsletter form submission alert
    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
    });
});

window.addEventListener('beforeunload', (event) => {
    // Smooth page transition effect on unload
    document.body.style.opacity = 0;
});

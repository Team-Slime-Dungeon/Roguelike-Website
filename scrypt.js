document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to all links in the navigation
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetPage = link.getAttribute('href');
            navigateToPage(targetPage);
        });
    });
});

function navigateToPage(pageUrl) {
    const currentPage = document.querySelector('.page');
    currentPage.classList.add('page-leave');

    setTimeout(() => {
        window.location.href = pageUrl;
    }, 500); // Wait for the animation to complete before navigating
}

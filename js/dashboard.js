document.addEventListener('DOMContentLoaded', function () {
    // Set the initial section to 'Dashboard'
    updateHeaderTitle('Dashboard');

    // Handle sidebar navigation clicks
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            updateHeaderTitle(section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' '));
            // Update content based on the section
            // For simplicity, just updating the title here
            // You can add functionality to load specific content based on the section
        });
    });

    // Handle logout button click
    document.getElementById('logout').addEventListener('click', function () {
        // Perform logout action (e.g., sign out from Firebase)
        // Redirect to index page
        window.location.href = 'index.html';
    });

    function updateHeaderTitle(title) {
        document.getElementById('header-title').textContent = title;
    }
});

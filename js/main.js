document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle submenu visibility
    function toggleSubmenu(event) {
        event.stopPropagation(); // Prevent click from closing the submenu immediately
        const submenu = this.nextElementSibling;
        const isVisible = submenu.style.display === 'block';
        // Hide all submenus
        document.querySelectorAll('.submenu').forEach(menu => menu.style.display = 'none');
        // Toggle the clicked submenu
        submenu.style.display = isVisible ? 'none' : 'block';
    }

    // Attach click event listeners to all menu buttons
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('click', toggleSubmenu);
    });

    // Close dropdowns if clicking outside of them
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu')) {
            document.querySelectorAll('.submenu').forEach(submenu => {
                submenu.style.display = 'none';
            });
        }
    });
});

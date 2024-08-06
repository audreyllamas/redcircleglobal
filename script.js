document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add 'active' class to the clicked tab and corresponding panel
            tab.classList.add('active');
            const panelId = tab.getAttribute('data-tab');
            document.getElementById(panelId).classList.add('active');
        });
    });

    // Icon container click functionality
    const iconContainers = document.querySelectorAll('.icon-container');

    iconContainers.forEach(container => {
        container.addEventListener('click', () => {
            // Remove 'clicked' class from all other icons
            iconContainers.forEach(otherContainer => otherContainer.classList.remove('clicked'));

            // Add 'clicked' class to the clicked icon
            container.classList.add('clicked');
        });
    });

    // Profile icon dropdown functionality
    const profileIcon = document.getElementById('profile-icon');
    const profileDropdown = document.getElementById('profile-dropdown');

    profileIcon.addEventListener('click', () => {
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });
});

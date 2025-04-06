import { setBurgerIcon, toggleBurgerIcon } from "../js/hamburguer-icon.js";
console.log('Sidebar script loaded');

// todo: remove console.log
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    // let menuPath = document.getElementById('menuPath');

    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';
        // menuPath.setAttribute("d", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        setBurgerIcon(true);
    } else {
        sidebar.style.display = 'none';
        setBurgerIcon(false);
        // menuPath.setAttribute("d", "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z");
    }
}


// todo: Avoid exposing functions to the global scope; refactor to use a module pattern or event listeners
window.toggleSidebar = toggleSidebar; // Expose the function to the global scope
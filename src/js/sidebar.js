import { setBurgerIcon, toggleBurgerIcon } from "../js/hamburguer-icon.js";
console.log('Sidebar script loaded');

// todo: remove console.log
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const isOpen = sidebar.classList.toggle('open');

    setBurgerIcon(isOpen);
}


// todo: Avoid exposing functions to the global scope; refactor to use a module pattern or event listeners
window.toggleSidebar = toggleSidebar; // Expose the function to the global scope
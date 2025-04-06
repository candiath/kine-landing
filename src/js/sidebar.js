// todo: remove console.log
console.log('Sidebar script loaded');
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    let menuPath = document.getElementById('menuPath');

    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'flex';
        menuPath.setAttribute("d", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
    } else {
        sidebar.style.display = 'none';
        menuPath.setAttribute("d", "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z");
    }
}
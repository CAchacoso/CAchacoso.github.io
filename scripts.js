function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
})

// Animate Homepage Once
window.addEventListener('load', () => {
    if(document.querySelector('nav-bar') != null) {
        window.sessionStorage.setItem('Homepage', 'navbar');
    }
})

if(window.sessionStorage.getItem('Homepage')) {
    document.querySelector('nav-bar').property.remove('animation')
}
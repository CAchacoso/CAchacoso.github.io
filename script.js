let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height  = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            } )
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.addEventListner = ("load", (event) => {
    let options = {
        rootMargin: "0px",
        threshold: 0.8
    };

    const intersectionHandler = function(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
                entry.target.classList.remove("scrollFadeOut");
                entry.target.classList.add("scrollFadeIn");
            } else {
                entry.target.classList.remove("scrollFadeIn");
                entry.target.classList.add("scrollFadeOut");
            }
        });
    };
    let observer = new IntersectionObserver(intersectionHandler, options);
    document.querySelectorAll(".section").forEach((row, index) => {
        observer.observe(row);
    });
});
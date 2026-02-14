let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
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

const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const section = entry.target;

    if (entry.isIntersecting) {
      section.classList.add("visible");
      section.classList.remove("faded");
    } else {
      if (section.classList.contains("visible")) {
        section.classList.add("faded");
      }
    }
  });
}, {
  threshold: 0.4
});

sections.forEach(section => observer.observe(section));


window.onbeforeunload = function(){
    window.scrollTo(0, 0);
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
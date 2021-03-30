const hamburgerr = document.getElementsByClassName('hamburger')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
const links = document.getElementsByClassName('nav-links li')[0]

hamburgerr.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    links.forEach(link => {
        links.classList.toggle('fade');
    });

})

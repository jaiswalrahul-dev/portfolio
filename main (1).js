let menuIcon =document.querySelector("#menu-icon");
let navbar =document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

/*============ scrool section=========*/
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => 
    section.forEach(sec => {
       let top =window.scrollY;
       let offset = sec.offsetTop -150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute ('id');

       if(top >= offset && top < offset + height){
        navlinks.forEach.apply(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
       };
    
});
/*===============sticky navbar===========*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*===============remove toggle icons and navbar =======*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('ative');

/*===============scrool revel=======*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*===============Typed Js=======*/
const typed = new Typed('.multiple-text',{
    strings:['フロントエンドエンアに目指します', 'PHP 勉強中です', '国際情報科の学生です'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});












console.log('test');
/*=====  =====*/

/*===== MENU SHOW =====*/
const showMenu = () => {
   const toggle = document.getElementById('nav-toggle'),
      nav = document.getElementById('nav-menu');

   if (toggle && nav) {
      toggle.addEventListener('click', () => {
         nav.classList.toggle('show-menu');
      });
   }
};
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document
            .querySelector('.nav__menu a[href*' + sectionId + ']')
            .classList.add('active__link');
      } else {
         document
            .querySelector('.nav__menu a[href*' + sectionId + ']')
            .classList.remove('active__link');
      }
   });
}
window.addEventListener('scroll', scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
   const header = document.getElementById('header');

   if (this.scrollY >= 200) header.classList.add('scroll-header');
   else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
   const scrollTop = document.getElementById('scroll-top');

   if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
   else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/*===== MIXITUP FILTER WORKS =====*/
const mixer = mixitup('.works__container', {
   selectors: {
      target: '.works__content',
   },
   animation: {
      duration: 400,
   },
});
/* Link active works */
const linkWork = document.querySelectorAll('.works__item');

function activeWorks() {
   if (linkWork) {
      linkWork.forEach((l) => l.classList.remove('.active-works'));
      this.classList.add('active-works');
   }
}
linkWork.forEach((l) => l.addEventListener('click', activeWorks));

/*===== GSAP ANIMATION =====*/
const words = [
   'I am Hana Truong',
   ' A Junior Frontend Developer',
   'Hardworkers.',
   'teamplayer.',
   'ICould I "sayhey" to you everyday?',
];

let cursor = gsap.to('.cursor', {
   opacity: 0,
   ease: 'power2.inOut',
   repeat: -1,
});
let masterTl = gsap.timeline({ repeat: -1 }).pause();
let boxTl = gsap.timeline();

boxTl
   .to('.box', {
      duration: 1,
      width: '19vw',
      delay: 1,
      ease: 'power4.inOut',
   })
   .from('.hi', { duration: 1, y: '7vw', eas: 'power2.out' })
   .to('.box', {
      duration: 1,
      height: '7vw',
      ease: 'elastic.out',
      onComplete: () => masterTl.play(),
   })
   .to('.box', {
      duration: 2,
      autoAlpha: 0.7,
      yoyo: true,
      repeat: -1,
      ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
   });
words.forEach((word) => {
   let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
   tl.to('.text', { duration: 1, text: word });
   masterTl.add(tl);
});

/*===== SWIPER CAROUSEL REFERENCES =====*/

const swiper = new Swiper('.reference_container', {
   spaceBetween: 16,
   loop: true,
   grabCursor: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});

/*===== COPYRIGHT =====*/
const date = new Date();
const year = date.getFullYear();
document.getElementById('year').innerHTML = year;

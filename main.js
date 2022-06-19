// SWIPER JS
const swiper = new Swiper('.swiper', {
    scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    },
});


let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');
let menu = document.querySelector('nav .container ul');

// Show Menu
menuBtn.addEventListener('click', () => {
    menu.style.left = '0';
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

// Hide Menu
closeBtn.addEventListener('click', () => {
    menu.style.left = '-20rem';
    menuBtn.style.display = 'inline-block'
    closeBtn.style.display = 'none'
})

let navItems = menu.querySelectorAll('li');

let changeActiveItem = () => {
    navItems.forEach(item => {
        let link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    let link = item.querySelector('a')
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active')
    })
})


// Read More (ABOUT);
let readMoreBtn = document.querySelector('.read-more');
let readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "Show less";
    } else {
        readMoreBtn.textContent = "Show more";
    }
})

// show/hide skills Item
let skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})


// add box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 10)
})
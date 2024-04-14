const mobileMenuOpenBtn = document.querySelector('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelector('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    const mobileMenuCloseFunc =function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function (){
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}

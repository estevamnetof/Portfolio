export default function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    const toTopbtn = document.querySelector('.to-top');

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 100) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    function toSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    toTopbtn.addEventListener('click', toSection)
}


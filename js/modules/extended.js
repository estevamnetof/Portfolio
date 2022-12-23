export default function initExtended() {

}

const extended = document.querySelector('.extended');
const mostrarMaisBtn = document.querySelector('.mostrar-m');

mostrarMaisBtn.addEventListener('click', () => {
    extended.classList.toggle('mostrar');
});
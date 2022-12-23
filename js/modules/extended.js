export default function initExtended() {

}

const extended = document.querySelector('.extended');
const mostrarMaisBtn = document.querySelector('.mostrar-mais');

mostrarMaisBtn.addEventListener('click', () => {
    extended.classList.toggle('mostrar');
});
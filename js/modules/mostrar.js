export default function initMostrar() {
    const mostrar = document.querySelector('#mostrar');

    mostrar.addEventListener('click', () => {
        mostrar.classList.toggle('ativo')
    })
}
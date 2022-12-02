const inputChange = document.querySelector('#font-size-control');
const abracadabra = document.querySelector('#text');

inputChange.addEventListener('change', event => {
    abracadabra.style.fontSize = `${event.currentTarget.value}px`;
});



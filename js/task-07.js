const rangeEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');
textEl.style.fontSize = `${rangeEl.value}px`;

rangeEl.addEventListener('input', onRange);

function onRange(event){
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};
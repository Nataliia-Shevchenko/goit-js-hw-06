const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event){
    const inputValue = event.currentTarget.value.trim();

if(Number(inputValue.length) === Number(inputEl.dataset.length)){
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    
}else{
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
}

}


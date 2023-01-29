let btnShow = document.querySelector('button');

btnShow.addEventListener('click', () =>{
    let selected = document.querySelector('input[type="radio]:checkws');
    result.innerText = selected.parentElement.textContent;
});
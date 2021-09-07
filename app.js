const submit = document.getElementById('submit');
const yob = document.getElementById('yob');
const input = document.getElementById('input');

submit.addEventListener('click', () => {
    yob.innerText = (787 - input.value) + 1234;
});
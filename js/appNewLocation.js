'use strict'

const form = document.getElementById('inputSalmonCookes');

function handleSubmit(event) {
    event.preventDefault();


    event.target.reset();
}


form.addEventListener('submit', handleSubmit);
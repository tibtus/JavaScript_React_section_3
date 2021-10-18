const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

/* 
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }

});

 */



wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red'); 
wrapper.append(btn);



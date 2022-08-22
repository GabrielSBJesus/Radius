const radius = document.querySelector('#radius');
const input = document.querySelector('#top_left');
const input2 = document.querySelector('#top_right');
const input3 = document.querySelector('#bottom_right');
const input4 = document.querySelector('#bottom_left');
const btn = document.querySelector('#btn');


btn.addEventListener('click', (e) => {
    if(input.value === ''){
        input.value = 0
    }
    if(input2.value === ''){
        input2.value = 0
    }
    if(input3.value === ''){
        input3.value = 0
    }
    if(input4.value === ''){
        input4.value = 0
    }

    radius.style.borderRadius = `${input.value} ${input2.value} ${input3.value} ${input4.value}`;
})
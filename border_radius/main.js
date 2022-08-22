const radius = document.querySelector('#radius');
const input_tl = document.querySelector('#top_left');
const input_tr = document.querySelector('#top_right');
const input_br = document.querySelector('#bottom_right');
const input_bl = document.querySelector('#bottom_left');
const btn = document.querySelector('#btn');

function delimita(value){
    if(value.value === ''){
        value.value = 0
    }  
}

btn.addEventListener('click', () => {
    delimita(input_tl)
    delimita(input_tr)
    delimita(input_br)
    delimita(input_bl)

    radius.style.borderRadius = `${input_tl.value}px ${input_tr.value}px ${input_br.value}px ${input_bl.value}px`;
})
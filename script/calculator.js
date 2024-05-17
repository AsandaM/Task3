let input = document.querySelector('[type="text"]')
// let clear = document.querySelector()

let buttons = document.querySelectorAll('button')

for(let button of buttons) {
    button.addEventListener('click', ()=>{
        console.log(button);
        input.value += button.innerText
    })
    
}


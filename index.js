const numberButtons = document.querySelectorAll('.number-button')
let display = document.querySelector('.result input')
const btnAC = document.querySelector('.btn-AC')
const btnDE = document.querySelector('.btn-DE')
const equal = document.querySelector('.equal')
const allButtons = document.querySelectorAll('.operator,.number-button')

function disableButtons() {
  allButtons.forEach(button => {
    button.disabled = true;
  });
}
function enableButtons() {
  allButtons.forEach(button => {
    button.disabled = false;
  });
}

equal.addEventListener('click',()=>{
  disableButtons()
  try {
    document.querySelector('.result input').style.color = 'greenyellow';
    display.value = eval(display.value)
  } catch (error) {
    document.querySelector('.result input').style.color = 'red';
    display.value = 'Math Error'
  }

  setTimeout(() => {
    enableButtons()
    display.value = ''
    document.querySelector('.result input').style.color = 'white';
  }, 1000);
})

numberButtons.forEach((button)=>{
  button.addEventListener('click',()=>{
    display.value += button.innerHTML.trim()
    display.scrollLeft = display.scrollWidth
  })
})

btnAC.addEventListener('click',()=>{
  display.value = ""
})
btnDE.addEventListener('click',()=>{
  display.value = (display.value).toString().slice(0,-1)
})


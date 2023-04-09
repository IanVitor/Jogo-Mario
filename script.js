const character = document.querySelector("#personagem")
const enemy = document.querySelector("#bloco")
const pontos = document.querySelector("#pontos span")
var i = 1
var bateu = false

const pular = () => {
  character.classList.add("pular")
  setTimeout(() => {
    character.classList.remove("pular")
  }, 1000)
}

setInterval(() => {

  if(enemy.offsetLeft < 70 && character.offsetTop > 200){
    enemy.style.left = `${enemy.offsetLeft}px`
    character.style.top = `${character.offsetTop}px`
    enemy.classList.remove("andar")
    bateu = true
  }
}, 100)

setInterval(() => {
  if(bateu === false){
    pontos.innerHTML = i++
  }
    
}, 1500)

function recarregar (){
  window.location.reload(true);
}

document.body.addEventListener('keydown', pular)

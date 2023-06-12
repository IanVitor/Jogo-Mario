const character = document.querySelector("#personagem")
const characterImg = document.querySelector("#personagem img")
const enemy = document.querySelector("#bloco")
const pontos = document.querySelector("#pontos span")
const btn_jump = document.querySelector("#btn_jump")
var scoreIndex = 1
var characterColision = false
var pointsArray = []

const characterJump = () => {
  character.classList.add("pular")
  setTimeout(() => {
    character.classList.remove("pular")
  }, 1000)
}

function colision (){
  enemy.classList.remove("andar")
  characterImg.src = "https://preview.redd.it/nd7ldj4dnvv71.png?width=160&format=png&auto=webp&s=037c2ac0835fbbe86363771ad6b6a76cda53a695";
  characterImg.style.width = "40px"
  characterImg.style.left = "0px"
}

setInterval(() => {

  if(enemy.offsetLeft < 70 && character.offsetTop > 200){
    enemy.style.left = `${enemy.offsetLeft}px`
    character.style.top = `${character.offsetTop}px`
    colision();
    characterColision = true;
  }
}, 100)

setInterval(() => {
  if(characterColision === false){
    pontos.innerHTML = scoreIndex++
  } else{
  }
    
}, 1500)

function recarregar (){
  window.location.reload(true);
}

document.body.addEventListener('keydown', () => {
  if(characterColision === true){
    salvarPontuacao(scoreIndex-1)
    recarregar()
  }else {
    characterJump()
  }
})

btn_jump.addEventListener('click', () => {
  if(characterColision === true){
    salvarPontuacao(scoreIndex-1)
    recarregar()
  }else {
    characterJump()
  }
})

// LocalStorage

function salvarPontuacao (pointsNumber){

  pointsArray = getPontuacao()
  
  
  let dateNow = new Date()
  let date = `${dateNow.getDate()}/${dateNow.getMonth()+1}`
  let points = [date, pointsNumber]
  
  pointsArray.push(points)

  if(pointsArray.length < 6){
    localStorage.points = JSON.stringify(pointsArray)
  } else {
    let newArray = ordenar(pointsArray)
    newArray.pop()
    localStorage.points = JSON.stringify(newArray)
  }

}

function getPontuacao (){
  if(localStorage.points){
    pointsArray = JSON.parse(localStorage.getItem('points'));
  };

  return pointsArray
}

function ordenar (array){
  let aux1 = []
  
  for(let i = 0;i<array.length;i++){  
    for(let j=0;j<array.length;j++){
      if(array[j][1] < array[i][1]){
        aux1 = array[j];
        array[j] = array[i];
        array[i] = aux1;
      }
    }
  }

  return array;
}
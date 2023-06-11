const character = document.querySelector("#personagem")
const characterImg = document.querySelector("#personagem img")
const enemy = document.querySelector("#bloco")
const pontos = document.querySelector("#pontos span")
var scoreIndex = 1
var characterColision = false
var points = [];

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
  }
    
}, 1500)

function recarregar (){
  window.location.reload(true);
}

document.body.addEventListener('keydown', () => {
  if(characterColision === true){
    recarregar()
  }else {
    characterJump()
  }
})

// LocalStorage

function createTaskInLocalStorage(pontuation){

  points = getStorageData()

  let ranking = []
  let date = new Date();

  ranking[0] = pontuation
  ranking[1] = date.toLocaleDateString();
  if(points.length <=5){
    points.push(ranking);
    localStorage.ranking = JSON.stringify(points);
  }else return
  
}

function getStorageData(){
  if (localStorage.ranking){
    points = JSON.parse(localStorage.getItem('ranking'));
  };

  console.log(points)

  return points;
}

function clear() {
  points = []

  let ranking = []

  points.push(ranking);
  localStorage.ranking = JSON.stringify(points);
}

//createTaskInLocalStorage(44)
getStorageData()
clear()
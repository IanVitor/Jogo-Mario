const table = document.querySelector("#tabela")

function getPontuacao (){
  if(localStorage.points){
    pointsArray = JSON.parse(localStorage.getItem('points'));
  };

  return pointsArray
}

const pontos = getPontuacao()

for(let i = 0;i<pontos.length;i++){
  tabela.innerHTML += 
  `
  <tr>
    <td>${pontos[i][0]}</td>
    <td>${pontos[i][1]}</td>
  </tr>
  `
}
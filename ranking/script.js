const table = document.querySelector("#tabela")

function getStorageData(){
  if (localStorage.ranking){
    points = JSON.parse(localStorage.getItem('ranking'));
  };

  console.log(points)

  return points;
}

const pontos = getStorageData()

for(let i =1;i<pontos.length;i++){
  console.log(pontos[i])
  tabela.innerHTML += `<td>${pontos[i][0]}</td>`
}
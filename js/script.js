function count_people_santa_clara(){
  let peoples = document.querySelector(".peoples_santa_clara");
  let situation = document.querySelector(".situation_santa_clara");
  let velocity = document.querySelector(".velocity_santa_clara");
  console.log(peoples.textContent)
  if (peoples.textContent > 10){
    situation.style.backgroundColor = "#fa7a02";
    velocity.textContent = "Moderado";
  };
  if (peoples.textContent > 25){
    situation.style.backgroundColor = "#ff0000";
    velocity.textContent = "Lento";
  };
}

function count_people_sao_sebastiao(){
  let peoples = document.querySelector(".peoples_sao_sebastiao");
  let situation = document.querySelector(".situation_sao_sebastiao");
  let velocity = document.querySelector(".velocity_sao_sebastiao");
  console.log(peoples.textContent)
  if (peoples.textContent > 10){
    situation.style.backgroundColor = "#fa7a02";
    velocity.textContent = "Moderado";
  };
  if (peoples.textContent > 25){
    situation.style.backgroundColor = "#ff0000";
    velocity.textContent = "Lento";
  };
}

function count_people_guanabara(){
  let peoples = document.querySelector(".peoples_guanabara");
  let situation = document.querySelector(".situation_guanabara");
  let velocity = document.querySelector(".velocity_guanabara");
  console.log(peoples.textContent)
  if (peoples.textContent > 10){
    situation.style.backgroundColor = "#fa7a02";
    velocity.textContent = "Moderado";
  };
  if (peoples.textContent > 25){
    situation.style.backgroundColor = "#ff0000";
    velocity.textContent = "Lento";
  };
}

function count_people_leporace(){
  let peoples = document.querySelector(".peoples_leporace");
  let situation = document.querySelector(".situation_leporace");
  let velocity = document.querySelector(".velocity_leporace");
  console.log(peoples.textContent)
  if (peoples.textContent > 10){
    situation.style.backgroundColor = "#fa7a02";
    velocity.textContent = "Moderado";
  };
  if (peoples.textContent > 25){
    situation.style.backgroundColor = "#ff0000";
    velocity.textContent = "Lento";
  };
}
count_people_leporace()
count_people_guanabara()
count_people_santa_clara()
count_people_sao_sebastiao()
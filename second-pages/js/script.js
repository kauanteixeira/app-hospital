function doctors_attending(){
  let select = document.querySelector("#select_doctors");
  let doctor = document.querySelector(".doctors-attending");
  let clinicoGeral = "Clínico Geral";
  let pediatra = "Pediatra";
  let neurologista = "Neurologista";
  let n1 = 2;
  let n2 = 1;
  let n3 = 3;
  select.addEventListener('change', function(){
    doctor.style.marginLeft= "3.5px";
    if (select.value == "clinicoGeral"){
      doctor.textContent = n1 + " - " + clinicoGeral + " atendendo";
      if (n1 >= 2){
        clinicoGeral = "Clínicos Gerais";
        doctor.textContent = n1 + " - " + clinicoGeral + " atendendo";
      }
    }
    if (select.value == "pediatra"){
      doctor.textContent = n2 + " - " + pediatra + " atendendo";
      if (n2 >= 2){
        pediatra = "Pediatras";
        doctor.textContent = n2 + " - " + pediatra + " atendendo";
      }
    }
    if (select.value == "neurologista"){
      doctor.textContent = n3 + " - " + neurologista + " atendendo";
      if (n3 >= 2){
        neurologista = "Neurologistas";
        doctor.textContent = n3 + " - " + neurologista + " atendendo";
      }
    }
  })
}

doctors_attending()
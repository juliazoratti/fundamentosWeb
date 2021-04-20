let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {

   let txtNome = document.querySelector('#txtNome')
   if (nome.value.length < 3) {
      txtNome.innerHTML='Nome Inválido'
      txtNome.style.color = 'white'
   } else {
      txtNome.innerHTML ='Nome Válido'
      txtNome.style.color = 'white'
      nomeOk = true
   }

}
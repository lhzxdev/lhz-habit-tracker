//document = documento HTML
const form = document.querySelector("#form-habits") //variavel constante com função query selector
const nlwSetup = new NLWSetup(form) //variavel constante com criação de objeto
const button = document.querySelector("header button") //seleciona botão no header do html

button.addEventListener("click", add) //adiciona um evento a variavel button click e uma função add
form.addEventListener('change', save)

function add() { //criação da função
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso')
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} 
nlwSetup.setData(data) //setou o objeto
nlwSetup.load() //roda o objeto
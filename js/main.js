const form = document.querySelector('form')
const registerBtn = document.querySelector('header button')
const nlwSetup = new NLWSetup(form)

function addDay(){
  // const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const today = '20/01'
  const dayExists = nlwSetup.dayExists(today)

  if(!dayExists){
    nlwSetup.addDay(today)
  }else{
    alert('Dia já registrado!')
    return
  }
}

function saveData(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

registerBtn.addEventListener("click", addDay)
form.addEventListener('change', saveData)

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
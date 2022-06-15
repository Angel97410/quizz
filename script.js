const form = document.querySelector('.form-quizz');
let tabResult = [];
const reponse = ['c', 'a', 'b','a','c'];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (i=1; i<6 ; i++){
    tabResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    console.log(tabResult)
  }
  tabResult = [];
})
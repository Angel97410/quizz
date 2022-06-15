const form = document.querySelector('.form-quizz');
let tabResult = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (i=1; i<6 ; i++){
    tabResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    console.log(tabResult)
  }
  tabResult = [];
})
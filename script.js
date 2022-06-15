const form = document.querySelector('.form-quizz');
let tabResult = [];
const reponse = ['c', 'a', 'b','a','c'];
const emoji = ['✅','✨','👀','😭','👎']
const titreResult = document.querySelector('.result h2');
const textResult = document.querySelector('.note');
const aideResult = document.querySelector('.aide');
const allQuestion = document.querySelectorAll('.question-bloc');
let verifTab = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (i=1; i<6 ; i++){
    tabResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    console.log(tabResult)
  }
  verifFunc(tabResult);
  tabResult = [];
})

function verifFunc(tabResult){

  for (let a=0 ; a<5; a++){
    if (tabResult[a]=== reponse[a]){
      verifTab.push(true);
    }else{
      verifTab.push(false);
    }
  }
  console.log(verifTab);
  verifTab = [];
}
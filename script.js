const form = document.querySelector('.form-quizz');
let tabResult = [];
const reponse = ['c', 'a', 'b', 'a', 'c'];
const emoji = ['✅', '✨', '👀', '😭', '👎']
const titreResult = document.querySelector('.result h2');
const textResult = document.querySelector('.note');
const aideResult = document.querySelector('.aide');
const allQuestion = document.querySelectorAll('.question-bloc');
let verifTab = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (i = 1; i < 6; i++) {
    tabResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    console.log(tabResult)
  }
  verifFunc(tabResult);
  tabResult = [];
})

function verifFunc(tabResult) {

  for (let a = 0; a < 5; a++) {
    if (tabResult[a] === reponse[a]) {
      verifTab.push(true);
    } else {
      verifTab.push(false);
    }
  }
  afficherResult(verifTab);
  coouleursFonction(verifTab);
  verifTab = [];
}

function afficherResult(tabCheck) {
  const nbFalse = tabCheck.filter(el => el !== true).length;
  console.log(nbFalse)
  switch (nbFalse) {
    case 0:
      titreResult.innerText = '✅ Bravo, c\'est un sans faute ✅';
      aideResult.innerText = '';
      textResult.innerText = "5/5";
      break;
    case 1:
      titreResult.innerText = '✨ Vous y êtes presque ! ✨';
      aideResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
      textResult.innerText = "4/5";
      break;
    case 2:
      titreResult.innerText = '✨ Encore un effort ... 👀';
      aideResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
      textResult.innerText = "3/5";
      break;
    case 3:
      titreResult.innerText = '👀 Il reste quelques erreurs 😭';
      aideResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
      textResult.innerText = "2/5";
      break;
    case 4:
      titreResult.innerText = '😭 Peux mieux faire ! 😭';
      aideResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
      textResult.innerText = "1/5";
      break;
    case 5:
      titreResult.innerText = '👎 Peux mieux faire ! 👎';
      aideResult.innerText = '';
      textResult.innerText = "0/5";
      break;
    default:
      "Oops, cas innatendu ! "
  }
}


function coouleursFonction(tabValBool) {
  for (let j = 0; j < tabValBool.length; j++) {

  }
}
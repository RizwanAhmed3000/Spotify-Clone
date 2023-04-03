const logIn = document.querySelector("#logIn");
console.log(logIn);
const signUp = document.querySelector("#signUp");
console.log(signUp);
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#closeBtn");
console.log(closeBtn);
const logInForm = document.querySelector(".loginForm");
let shuffleBtn = document.querySelector('#shuffleBtn');
console.log(shuffleBtn)



function openLogInForm(){
    overlay.classList.remove('hidden')
    logInForm.classList.remove('hidden')
}
function closeLogInForm(){
    overlay.classList.add('hidden')
    logInForm.classList.add('hidden')
}

logIn.addEventListener('click', openLogInForm);
signUp.addEventListener('click', openLogInForm);
closeBtn.addEventListener('click', closeLogInForm);
overlay.addEventListener('click', closeLogInForm)
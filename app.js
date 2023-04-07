const logIn = document.querySelector("#logIn");
console.log(logIn);
const signUp = document.querySelector("#signUp");
console.log(signUp);
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#closeBtn");
console.log(closeBtn);
const logInForm = document.querySelector(".loginForm");
var shuffleBtn = document.querySelector('#shuffleBtn').style;
console.log(shuffleBtn)

const icon = document.querySelector('.icon').firstChild;
const sideNav = document.querySelector('.navContainer');
const closeBtn2 = document.querySelector('.closeBtn').firstChild;

icon.addEventListener('click', callNav);
closeBtn2.addEventListener('click', callNav)

function callNav(){
    sideNav.classList.toggle('notVisible');
}


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
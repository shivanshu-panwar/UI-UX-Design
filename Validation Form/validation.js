const name = document.getElementById('name');
const email = document.getElementById('email').value;
const passward = document.getElementById('passward').value;
const byinput = document.getElementById('byinput');
const submit = document.getElementById('submit')
console.log(name);
console.log(submit);
function check(){
    if(name == ' '){
            byinput.innerText = " Please Enter Userame";
    }
}
submit.addEventListener('click', ()=>{
     check();
})
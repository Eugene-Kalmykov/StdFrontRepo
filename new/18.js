//lesson #16
/*
const obj = {

    name: 'ivan',
}
const convert = JSON.stringify(obj);

localStorage.setItem('obj' , convert); //записываем в локал сторадж по ключю
localStorage.setItem('key' , "123");

const value = localStorage.getItem('obj'); // достаем по ключю
console.log(JSON.parse(value));
*/



loginForm.addEventListener("submit", function (event) {
    let login = document.loginForm.login.value;
    let password = document.loginForm.password.value;
    let user = {login:"", password:""}
    console.log(login);

    //const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //const numbers = ["1","2","3","4","5","6","7","8","9","0"];

    let num = password.split("").find((item) => Number(item));

    let str =  password.split("").find((item) => isNaN(item));

   

/*
    password.split("").forEach( (value) => {
        value =
    let log =  login
    .toLowerCase()
    .split("")
    
    });
*/

    if(login.length < 5){
        alert("login менее 5 символов");
        return
     }
    if(password.length < 5){
        alert("password менее 5 символов");
        return
     } 
     if(str != true){
        alert("в password нет букв"); 
        return
     }
     if(num != true){
        alert("в password нет чисел"); 
        return
     }
     user.login = login;
     user.password = password;
     localStorage.setItem('user', JSON.stringify(user));
});
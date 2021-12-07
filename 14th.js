/*console.log(document.form);
const form = document.form;
form.input.value = "ivan"
*/

//select.options[2].selected = true;
 // select.selectedIndex = 2;
 // select.value = 'banana';

/*

const input = document.form.input; //ищет по имени(name="input")
console.log(input);
 input.addEventListener('blur', (event) => {
   let text = event.target.value;
   
   let array = text.split("");
   console.log(array);
   array.forEach((item) => {
       if(item === "@"){
            input.className = "invalid" ;
       } else {
            input.className = "error";      
       }
   });

 });

 if(text.includes("@")){
    input.className = "invalid" ;
 } else {
    input.className = "error";  
 }
});
*/

const form = document.form;

form.addEventListener("submit", (event) => {
    event.preventDefault();
});



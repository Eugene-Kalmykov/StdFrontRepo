//lesson #9 - & bind
/* const obj = {
    age: 10,
    say: function() {
        console.log(this.age);          
    }
}
obj.say();

const newFunc = obj.say;

const newObject = {
    age: 15,
}

const newWithBind = newFunc.bind(newObject);

console.log (newWithBind());
*/
/*
const obj = {
    age: 10,
    say: function() {
        console.log(this.age);          
    }
}
obj.say();

const newFunc = obj.say;

const newObject = {
    age: 15,
}

 newFunc.call(newObject);
*/
//document. body.style. background = "red";
/*
const element = document.getElementById("id");
const classes = document.querySelectorAll(".class");
const findAllP = document.getElementsByClassName("class");
const findP = document.getElementsByTagName("p");
console.log(element);
console.log(classes);
console.log(findAllP);
console.log(findP[4]);
*//*
let div = document.createElement("div");
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong>";

document.body.append(div);
*/
const element = document.getElementById("id");

let p = document.createElement("p");
p.className = "prompt";
p.innerHTML = "<strong>введите данные</strong>";

//document.body
element.prepend(p);
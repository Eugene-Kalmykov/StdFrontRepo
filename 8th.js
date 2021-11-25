//lesson 10 - 
//const element = document.getElementById("id1")
//const text  = document.getElementById("id2")
//element.style.color = "green";
//text.style.color = "lime";
/*
const classes = document.querySelectorAll(".text");
let arr = Array.from(classes);
arr.forEach(function(item){
item.style.color = "red";
});
const text  = document.getElementById("id3");
let value = text.innerHTML + "35";
console.log(value);

let p = document.createElement("p");
p.className = "text";
p.innerHTML = "5";
classes[ classes.length -1 ].append(p);
console.log(classes.length)
*/
/*
const classes = document.querySelectorAll(".text");
let arr = Array.from(classes);
arr.forEach(function(item){
 if(item.innerHTML === "Ivan"){
     item.innerText = "Jack";     //це рабочий варинт!!!))
 }
});
*/
/*
const text  = document.getElementById("id3");
text.innerHTML = text.innerHTML + "35";
console.log(value);
*/
const links = document.getElementsByTagName("a")
let arrLinks = [ "google", "vk", "youtube", "amazon"]
let arr = Array.from(links);
/*
arr.forEach((item) => {
    
    arrLinks.forEach((link, i) => {
        i++;
     item.href = link;
   
    }); 
});
*/
let i = 0
while(i < arr.length, i++){

arr[i].href = arrLinks[i];

}

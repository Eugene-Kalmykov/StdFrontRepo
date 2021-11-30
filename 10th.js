/*
const texts = document.getElementsByClassName("p");
let array = Array.from(texts);
array.forEach((item) => {
    item.addEventListener('click', function(event) {
        
        item.style.display = "none"; 
        console.log(event.target);
        
    });
});
*/
document.body.addEventListener('click', function(event) {
     if(event.target.tagName === "P") {
         if(event.target.style.display ===''){
            event.target.style.display = "none";
         }
     }  
});
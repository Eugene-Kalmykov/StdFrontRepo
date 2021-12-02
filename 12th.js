const ul = document.getElementsByTagName("ul")
let a = ul[0];
a.addEventListener('click', function(event) {
    if(event.target.tagName === "LI") {
    alert(event.target.innerText);
    }
});
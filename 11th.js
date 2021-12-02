const btn = document.getElementsByTagName("button");
const div = document.getElementsByTagName("div");

btn.addEventListener('click', function () {
    console.log(FFF);
});
div.addEventListener('click', function (event) {
    console.log(DDD);
    event.stopPropagation()
});
/*
const click = document.getElementById("id1");
const click2 = document.getElementById("id2");
const zero = document.getElementById("zero");
let count = document.getElementById("count")
let value = 0
click.addEventListener('click', function(event) {
    count.innerText = `${value}`;
    event.stopPropagation()
    return value++;
    ;
});
click2.addEventListener('click', function(event) {
    count.innerText = `${value}`;
    event.stopPropagation();
    return value--;
    
});
zero.addEventListener('click', function() {
   count.innerText = "0";
});
*/
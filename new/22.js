//const canvas = document.getElementById("canvas")
//const ctx = canvas.getContext("2d");
/*
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(50, 50);
ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(0, 100);
ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.arc(95, 50 ,40 , 0, 2*Math.PI)
ctx.stroke();

//text==================
ctx.font = "30px Arial";
ctx.fillText("Hello", 100, 100);
*/
let canvas = document.getElementById("canvas"), context = canvas.getContext("2d"), w = canvas.width, h=canvas.height;
                 
            var mouse = { x:0, y:0};
            var draw = false;
             
            canvas.addEventListener("mousedown", function(e){
                 
                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
                draw = true;
                context.beginPath();
                context.moveTo(mouse.x, mouse.y);
            });
            canvas.addEventListener("mousemove", function(e){
                 
                if(draw==true){
                 
                    mouse.x = e.pageX - this.offsetLeft;
                    mouse.y = e.pageY - this.offsetTop;
                    context.lineTo(mouse.x, mouse.y);
                    context.stroke();
                }
            });
            canvas.addEventListener("mouseup", function(e){
                 
                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
                context.lineTo(mouse.x, mouse.y);
                context.stroke();
                context.closePath();
                draw = false;
            });


context.canvas.wight = window.innerWidth;
context.canvas.hight = window.innerHight;

window.addEventListener


//=======================================================
let img = document.getElementById("img");



img.addEventListener("keydown", function (event) {

 
});
let img = document.getElementById("1");
console.log(img);

let currentDroppable = null;

img.ondragstart = function () {
  return false;
};

img.onmousedown = function (event) {
  img.style.position = "absolute";
  img.style.zIndex = 1000;

  document.body.append(img);

  let shiftX = event.clientX - img.getBoundingClientRect().left;
  let shiftY = event.clientY - img.getBoundingClientRect().top;
  


  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    img.style.left = pageX - shiftX + "px";
    img.style.top = pageY - shiftY + "px";
  }
  /*
  function onmousemove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onmousemove);

  img.onmouseup = function () {
    document.removeEventListener("mousemove", onmousemove);
    img.onmouseup = null;
  };
  */
  function onmousemove(event) {
    moveAt(event.pageX, event.pageY);
  
    img.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    img.hidden = false;
  
    if (!elemBelow) return;
  
    
    let droppableBelow = elemBelow.closest('#second');
  
    if (currentDroppable != droppableBelow) {
    
  
      if (currentDroppable) {
        currentDroppable.style.background = "";
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        currentDroppable.style.background = "pink";
        enterDroppable(currentDroppable);
      }
    }
  }
  document.addEventListener("mousemove", onmousemove);

  img.onmouseup = function () {
    document.removeEventListener("mousemove", onmousemove);
    img.onmouseup = null;
  };




};

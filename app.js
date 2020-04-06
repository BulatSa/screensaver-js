const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const step = 5;
const maxWidth = parent.clientWidth;
const maxHeight = parent.clientHeight;
let directionHorizontal = "left";
let directionVertical = "down";
const arrColor = ['red', 'green', 'blue', 'yellow', 'grey', 'lightblue', 'purple', 'aquamarine', 'indigo', 'wheat'];

//console.log(maxWidth, maxHeight);

function goLeft(elem, step) {
  const leftPos = parseInt(getComputedStyle(elem).left);
  elem.style.left = leftPos - step + "px";
}

function goRight(elem, step) {
  const leftPos = parseInt(getComputedStyle(elem).left);
  elem.style.left = leftPos + step + "px";
}

function goDown(elem, step) {
  const topPos = parseInt(getComputedStyle(elem).top);
  elem.style.top = topPos + step + "px";
}

function goTop(elem, step) {
  const topPos = parseInt(getComputedStyle(elem).top);
  elem.style.top = (topPos - step) + "px";
}

function checkOutBorderWidth(elem, maxWidth) {
  const leftPos = parseInt(getComputedStyle(elem).left);
  const elemWidth = elem.clientWidth;
  if (leftPos + elemWidth >= maxWidth || leftPos < 0) {
    return true;
  }
  return false;
}

function checkOutBorderHeight(elem, maxHeight) {
  const topPos = parseInt(getComputedStyle(elem).top);
  const elemHeight = elem.clientHeight;
  if (topPos + elemHeight >= maxHeight || topPos < 0) {
    return true;
  }
  return false;
}

function checkDirection() {
  let colorClass = arrColor[Math.floor(Math.random() * arrColor.length)];
  
  if (checkOutBorderWidth(child, maxWidth)) {
    child.className = '';
    child.classList.add(colorClass);
    if (directionHorizontal == "left") {
      directionHorizontal = "right";
    } else {
      directionHorizontal = "left";
    }
  }
  if (checkOutBorderHeight(child, maxHeight)) {
    child.className = '';
    child.classList.add(colorClass);
    if (directionVertical == "top") {
      directionVertical = "down";
    } else {
      directionVertical = "top";
    }
  } 
}

function moveElem(elem, step) {
  checkDirection();
  if (directionHorizontal == "left") {
    goLeft(elem, step);
  } else {
    //debugger;
    goRight(elem, step);
  }
  if (directionVertical == "down") {
    goDown(elem, step);
  } else {
    //debugger;
    goTop(elem, step);
  }
}

setInterval(()=>moveElem(child, 1), 10);

//Mouse tracker
//create a cursor object, circle, that is visible on the screen
// const cursorHtml = document.createElement("article");
// cursorHtml.innerHTML(`<article id="cursor-circle"></article>`);
// document.body.appendChild("cursor.html");
//cursorHtml.innerHTML = `<article id="cursor-circle"></article>`;
//create a mouse event listener that tracks the x coordinate of the cursor
const fmouse = (mouse) => {

  let xcood = mouse.clientX - 12;
  let ycood = mouse.clientY - 12;
  document.getElementById("cursor-circle").setAttribute("style", `left:${xcood}px; top:${ycood}px`);
  console.log(xcood, ycood);
}

const mouse = document.addEventListener("mousemove", fmouse);





//create a mouse event listener that tracks the y coordinate of the cursor
//change the value of the cursor object's position to the x and y coordinates of the cursor

//animations?

// const title = document.getElementById("main-title");
// console.log(title);

// // querySelector
// const title2 = document.querySelector("#main-title");
// console.log(title2);

// const firstIntro = document.querySelector(".intro");
// console.log(firstIntro);
// const nestedIntro = document.querySelector("div > p");
// console.log(nestedIntro);

// const firstButton = document.querySelector("button");
// console.log(firstButton);

// const allButtons = document.querySelectorAll("button");
// console.log(allButtons);

// for (let i = 0; i < allButtons.length; i++) {
//   console.log(allButtons[i]);
// }

// event listeners
/**
 *
 * element.addEventListener(eventType, callbackFuntion)
 */

// const btn = document.querySelector("#btn-2");
// btn.addEventListener("click", function () {
//   console.log("Button was clicked");
// });

// btn.addEventListener("dblclick", function () {
//   console.log("Double Click");
// });

// const newDiv = document.createElement("div");
// // newDiv.innerText = "<b>hello from Javascript</b>";
// newDiv.innerHTML = "<b>hello from Javascript</b>";
// console.log(newDiv);

// const body = document.querySelector("body");
// body.appendChild(newDiv);

// const sevenElement = document.createElement("li");
// sevenElement.innerText = "7";

// const ourList = document.querySelector("ul");

// const allItems = document.querySelectorAll("li");
// console.log(allItems);

// const referenceNode = allItems[6]; // liu with 8
// ourList.insertBefore(sevenElement, referenceNode);

const para = document.querySelector(".intro");
const style = document.createElement("style");
style.innerText = `

.highlight{
background-color:yellow;
font-weight:bold
}

.hidden{
display:none;
}

.active{
border: 2px solid blue;
padding:8px;
}

`;

document.head.append(style);

para.classList.add("active");
para.classList.remove("active");

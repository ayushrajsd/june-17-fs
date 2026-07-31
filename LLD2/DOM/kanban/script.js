const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal-input");
const ticketContainer = document.querySelector(".ticket-container");
const toolBox = document.querySelector(".toolbox");
let ticketsArr = [];

// === STATE ====
let selectedColor = "#ff6b6b";

// === Modal toggling ===
let isModalOpen = false;
let ticketCounter = 0;

// === HELPERS ===
function generateId() {
  ticketCounter++;
  console.log(crypto.randomUUID());
  return `ticket-${ticketCounter}`;
}

function createTicket(taskText, color) {
  const id = generateId();

  // create the ticket container div
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");
  ticket.setAttribute("data-id", id);
  //   ticket.dataset.id = id;

  // 2. create the ticker color band
  const colorband = document.createElement("div");
  colorband.classList.add("ticket-color-band");
  colorband.style.backgroundColor = color;

  // 3. text area
  const text = document.createElement("div");
  text.classList.add("ticket-text");
  text.textContent = taskText;

  // 4. locl icon
  const lock = document.createElement("div");
  lock.classList.add("ticket-lock");
  lock.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;

  // remove button

  const removeBtn = document.createElement("div");
  removeBtn.classList.add("ticket-remove");
  removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  // assemble
  ticket.append(colorband);
  ticket.append(text);
  ticket.append(lock);
  ticket.append(removeBtn);

  // add the ticket to the poage
  ticketContainer.appendChild(ticket);
  return id;
}

function createTicket2(taskText, color) {
  const ticketId = generateId();
  const ticketElement = document.createElement("div");
  ticketElement.classList.add("ticket");
  ticketElement.setAttribute("data-id", ticketId);
  ticketElement.innerHTML = `<div class="ticket-color-band" style="background-color: ${color};"></div> <div class="ticket-text"></div> <div class="ticket-lock"> <i class="fa-solid fa-lock-open"></i> </div>`;
  const ticketTaskElement = ticketElement.querySelector(".ticket-text");
  ticketTaskElement.textContent = taskText;
  ticketContainer.appendChild(ticketElement);
}

/***
 * 
 * const createTicket = function(taskText, color) {
const ticketId = generateUniqueId();
const ticketElement = document.createElement("div");
ticketElement.classList.add("ticket");
ticketElement.setAttribute("data-id", ticketId);
ticketElement.innerHTML = <div class="ticket-color-band" style="background-color: ${color};"></div> <div class="ticket-text"></div> <div class="ticket-lock"> <i class="fa-solid fa-lock-open"></i> </div>;
const ticketTaskElement = ticketElement.querySelector(".ticket-text");
ticketTaskElement.textContent = taskText;
listContainer.appendChild(ticketElement);
};
 */

/**
 * 
 *   <div class="ticket">
        <div class="ticket-color-band" style="background-color: #ff6b6b"></div>
        <div class="ticket-text">Buy groceries</div>
        <div class="ticket-lock">
          <i class="fa-solid fa-lock-open"></i>
        </div>
      </div>
 */

addBtn.addEventListener("click", function () {
  isModalOpen = !isModalOpen;

  if (isModalOpen) {
    modal.classList.remove("hidden");
    addBtn.textContent = "-";
  } else {
    modal.classList.add("hidden");
    addBtn.textContent = "+";
  }
});

// === MODAL INPUT HANDLING ===
modalInput.addEventListener("keyup", function (event) {
  //   console.log(event.key);
  if (event.key === "Enter") {
    event.preventDefault();
    const taskText = modalInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task description");
      return;
    }
    // capture user input
    console.log("Task: ", taskText);
    console.log("Priority color: ", selectedColor);
    // create the ticket
    const id = createTicket(taskText, selectedColor);
    ticketsArr.push({
      id,
      text: taskText,
      color: selectedColor,
      isLocked: false,
    });

    modalInput.value = "";
  }
});

// const colorBoxes = document.querySelectorAll('.color-box');
// colorBoxes.forEach(function(box){
//     box.addEventListener('click', function(){
//         selectedColor = box.dataset.color;
//     })
// })

// === COLOR SELECTION === ( EVENT DELEGATION)
let activeColorBox = document.querySelector(".color-pink");
activeColorBox.classList.add("active");

toolBox.addEventListener("click", function (event) {
  // get the target button
  // add guard claude
  const clickedElement = event.target;
  if (!clickedElement.classList.contains("color-box")) {
    return;
  }
  // remove active from default
  activeColorBox.classList.remove("active");
  // update selected color and active element
  selectedColor = clickedElement.dataset.color;
  // add the active class
  activeColorBox = clickedElement;
  activeColorBox.classList.add("active");
});

ticketContainer.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const removeBtn = clickedElement.closest(".ticket-remove");

  if (!removeBtn) {
    return; // ignore clicks anywhere else
  }
  // find the parent
  const ticket = removeBtn.closest(".ticket");
  const ticketId = ticket.getAttribute("data-id");

  // remove the ticket from the array
  ticketsArr = ticketsArr.filter(function (ticket) {
    return ticket.id !== ticketId;
  });

  // remove the dom
  ticket.remove();
});

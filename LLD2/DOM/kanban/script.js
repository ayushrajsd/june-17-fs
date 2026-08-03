const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal-input");
const ticketContainer = document.querySelector(".ticket-container");
const toolBox = document.querySelector(".toolbox");
let ticketsArr = [];
const COLORS = ["#ff6b6b", "#6bcbff", "#6bff9e", "#ffb86b"];

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

// === LOCAL STORAGE ===
function saveToLocalStorage() {
  localStorage.setItem("kanban-tickets", JSON.stringify(ticketsArr));
  localStorage.setItem("kanban-counter", ticketCounter.toString());
}

function renderTicket(ticketData) {
  // create the ticket container div
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");
  ticket.setAttribute("data-id", ticketData.id);
  //   ticket.dataset.id = id;

  // 2. create the ticker color band
  const colorband = document.createElement("div");
  colorband.classList.add("ticket-color-band");
  colorband.style.backgroundColor = ticketData.color;

  // 3. text area
  const text = document.createElement("div");
  text.classList.add("ticket-text");
  text.textContent = ticketData.text;

  // set the contenteditable based on locl state
  if (ticketData.isLocked) {
    text.setAttribute("contenteditable", "false");
  } else {
    text.setAttribute("contenteditable", "true");
  }

  // 4. locl icon
  const lock = document.createElement("div");
  lock.classList.add("ticket-lock");
  if (ticketData.isLocked) {
    lock.innerHTML = `<i class="fa-solid fa-lock"></i>`;
  } else {
    lock.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;
  }

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
}

function createTicket(taskText, color) {
  const id = generateId();
  const ticketData = {
    id,
    text: taskText,
    color,
    isLocked: false,
  };
  ticketsArr.push(ticketData);
  renderTicket(ticketData);
  saveToLocalStorage();
  //   return id;
}

/// === load tickets on page load
function loadFromLocalStorage() {
  const savedtickets = localStorage.getItem("kanban-tickets");
  const savedCounter = localStorage.getItem("kanban-counter");
  if (savedtickets) {
    ticketsArr = JSON.parse(savedtickets);
    ticketsArr.forEach(function (ticketData) {
      renderTicket(ticketData);
    });
  } else {
    ticketsArr = [];
  }
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
    createTicket(taskText, selectedColor);

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

  // === HANDLE REMOVE ===
  const removeBtn = clickedElement.closest(".ticket-remove");

  if (removeBtn) {
    // return; // ignore clicks anywhere else
    // find the parent
    const ticket = removeBtn.closest(".ticket");
    const ticketId = ticket.getAttribute("data-id");

    // remove the ticket from the array
    ticketsArr = ticketsArr.filter(function (ticket) {
      return ticket.id !== ticketId;
    });

    // remove the dom
    ticket.remove();
    saveToLocalStorage();
    return;
  }

  // === HANDLE LOCK TOGGLE
  const lockBtn = clickedElement.closest(".ticket-lock");
  if (lockBtn) {
    const ticket = lockBtn.closest(".ticket");
    const ticketId = ticket.getAttribute("data-id");
    const textElement = ticket.querySelector(".ticket-text");
    const icon = lockBtn.querySelector("i");

    // find the ticket data
    const ticketData = ticketsArr.find(function (tkt) {
      return tkt.id === ticketId;
    });

    if (!ticketData) {
      return;
    }

    // toggle the locked state in the array
    ticketData.isLocked = !ticketData.isLocked;

    if (ticketData.isLocked) {
      // true
      // make the content editing false
      textElement.setAttribute("contenteditable", "false");
      // change the icon to locked icon
      icon.classList.remove("fa-lock-open");
      icon.classList.add("fa-lock");
    } else {
      // set the editing top true
      // set the icon to be unlocked
      textElement.setAttribute("contenteditable", "true");
      // change the icon to locked icon
      icon.classList.remove("fa-lock");
      icon.classList.add("fa-lock-open");
    }
    saveToLocalStorage();
    return;
  }

  // === HANDLE COLOR CYCLING ===
  const colorBand = clickedElement.closest(".ticket-color-band");
  if (colorBand) {
    const ticket = colorBand.closest(".ticket");
    const ticketId = ticket.getAttribute("data-id");

    // find the ticket data
    const ticketData = ticketsArr.find(function (tkt) {
      return tkt.id === ticketId;
    });

    if (!ticketData) {
      return;
    }

    // find the color index
    const currentIndex = COLORS.indexOf(ticketData.color);

    // calculate the next color index in the array
    const nextIndex = (currentIndex + 1) % COLORS.length;

    // update the data
    ticketData.color = COLORS[nextIndex];
    saveToLocalStorage();

    // update the DOM
    colorBand.style.backgroundColor = COLORS[nextIndex];
  }
});

ticketContainer.addEventListener(
  "blur",
  function (event) {
    // handle the edited ticket text here
    // console.log("target", event.target);
    // console.log(" current target", event.currentTarget);
    const editedElement = event.target;
    if (!editedElement.classList.contains("ticket-text")) {
      return;
    }
    const ticket = editedElement.closest(".ticket");
    const ticketId = ticket.getAttribute("data-id");
    const newText = editedElement.textContent.trim();

    // update the data array
    const ticketData = ticketsArr.find(function (tkt) {
      return tkt.id === ticketId;
    });
    if (ticketData) {
      ticketData.text = newText;
    }
    saveToLocalStorage();
  },
  true,
);

// === INITIALIZATION ===
loadFromLocalStorage();

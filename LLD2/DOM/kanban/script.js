const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const modalInput = document.querySelector(".modal-input");
const ticketContainer = document.querySelector(".ticket-container");
const toolBox = document.querySelector(".toolbox");

// === STATE ====
let selectedColor = "ff6b6b";

// === Modal toggling ===
let isModalOpen = false;

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
    debugger;
    const taskText = modalInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task description");
      return;
    }
    // capture user input
    console.log("Task: ", taskText);
    console.log("Priority color: ", selectedColor);
    // create the ticket
    modalInput.value = "";
  }
});

const searchInput = document.querySelector("#searchInput");
const movieList = document.querySelector("#movieList");
const addButton = document.querySelector("#addMovie");

const movies = localStorage.getitem("movies");

searchInput.addEventListener("keyup", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const cards = movieList.querySelectorAll(".movie-card");

  cards.forEach(function (card) {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function revealOnScroll() {
  const cards = document.querySelectorAll(".movie-card");
  cards.forEach(function (card) {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      card.classList.add("visible");
    }
  });
}

revealOnScroll();
window.addEventListener("scroll", revealOnScroll);

movieList.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete-btn");
  if (deleteBtn) {
    const card = deleteBtn.closest(".movie-card");
    card.remove();
  }
});

// Add button
/**
 * 
 * <div class="movie-card">
          <span class="movie-title">The Dark Knight</span>
          <button class="delete-btn">X</button>
        </div>
 */
addButton.addEventListener("click", function () {
  const movieName = prompt("enter a movie name");
  if (!movieName) return;
  const newCard = document.createElement("div");
  newCard.classList.add("movie-card");
  newCard.innerHTML = `
  <span class="movie-title">${movieName}</span>
          <button class="delete-btn">X</button>`;
  movieList.appendChild(newCard);
});

const data = localStorage.getItem("movies");
console.log(data);

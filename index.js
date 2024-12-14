const checkoutBtn = document.getElementById("checkoutBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const continueShopping = document.getElementById("continueShopping");


checkoutBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

continueShopping.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
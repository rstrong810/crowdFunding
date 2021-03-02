let outerContainer = document.getElementById("id-outer-container");
let backProduct = document.getElementById("back-project-button");
let modal = document.getElementById("modal-display");
let modalCloseButton = document.getElementById("close-modal-button");

backProduct.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);

function toggleModal() {
    outerContainer.classList.toggle("darken-screen");
    modal.classList.toggle("hide");
}
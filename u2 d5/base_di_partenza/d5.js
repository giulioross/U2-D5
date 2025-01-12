window.addEventListener("scroll", function () {
  const button = document.getElementById("mainButton");
  if (window.scrollY > 50) {
    button.classList.add("scrolled"); // Aggiungi la classe per cambiare il colore
  } else {
    button.classList.remove("scrolled"); // Rimuovi la classe se non si è scrollato abbastanza
  }
});

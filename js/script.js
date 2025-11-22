console.log("Witam szanownych szefunciów");

let button = document.querySelector(".header__remove-btn");
let headerTitle = document.querySelector(".header__title");

button.addEventListener("click", () => {

    if (headerTitle) {
        headerTitle.remove();
        headerTitle = null;

        button.textContent = "Nagłówek został usunięty";
    } else {
        button.textContent = "Nie ma już co usuwać";
    }
});

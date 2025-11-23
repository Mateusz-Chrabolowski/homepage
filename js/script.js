{
    const getElements = () => ({
        removeButton: document.querySelector(".header__remove-btn"),
        headerTitle: document.querySelector(".header__title"),
    });

    const handleHeaderRemove = (button, headerTitle) => {
        if (headerTitle) {
            headerTitle.remove();
            button.textContent = "Nagłówek został usunięty";
        } else {
            button.textContent = "Nie ma już co usuwać";
        }
    };

    const addEvents = ({ removeButton, headerTitle }) => {
        removeButton.addEventListener("click", () => {
            handleHeaderRemove(removeButton, headerTitle);
        });
    };

    const init = () => {
        const elements = getElements();
        addEvents(elements);
    };

    init();
}


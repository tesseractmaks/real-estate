export async function buttonElement(text, classElem, idFlem) {
    let button = document.createElement("button")
    button.textContent = text
    button.classList.add(classElem)
    button.setAttribute("id", idFlem)
    return button
}
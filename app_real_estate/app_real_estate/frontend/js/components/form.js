export function formInputElement(
    idElement, 
    labelText, 
    typeInput,
    typeName,
    placeholderTitle
    ) {

    let divInput = document.createElement("div")
    divInput.classList.add("input-form")
    let labelElement = document.createElement("label")
    labelElement.setAttribute("for", idElement)
    labelElement.textContent = labelText
    let inputElement = document.createElement("input")
    inputElement.setAttribute("id", idElement)
    inputElement.setAttribute("type", typeInput)
    inputElement.setAttribute("name", typeName)
    inputElement.setAttribute("autocomplete", "off")
    inputElement.setAttribute("placeholder", placeholderTitle)
    divInput.append(labelElement, inputElement)
    return divInput
}

export function formElement(buttonElement){
    const form = document.createElement("form")
    form.setAttribute("action", "")

    let divInput = document.createElement("div")
    divInput.classList.add("input-form")

    divInput.append(buttonElement)
    form.append(divInput)
    return form
}

export function textareaElement(
    idElement, 
    labelText, 
    typeName,
    placeholderTitle
    ) {

    let divTextarea = document.createElement("div")
    divTextarea.classList.add("textarea-form")
    let labelElement = document.createElement("label")
    labelElement.setAttribute("for", idElement)
    labelElement.textContent = labelText
    let textareaElement = document.createElement("textarea")
    textareaElement.setAttribute("id", idElement)
    textareaElement.setAttribute("name", typeName)
    textareaElement.setAttribute("autocomplete", "off")
    textareaElement.setAttribute("placeholder", placeholderTitle)
    divTextarea.append(labelElement, textareaElement)
    return divTextarea
    }
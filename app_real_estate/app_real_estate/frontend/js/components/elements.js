
export function anyIelements(tagname, faClass, textPart1="") {
    let any = document.createElement(tagname)
    any.textContent = textPart1
    let i = document.createElement("i")
    i.classList.add("fa")
    i.classList.add(faClass)
    any.prepend(i)
    return any
};

export function pIelements(faClass, textPart1="") {
    let p = document.createElement("p")
    p.textContent = textPart1
    let i = document.createElement("i")
    i.classList.add("fa")
    i.classList.add(faClass)
    p.prepend(i)
    return p
};

export function aIelements(link, faClass, textPart1="", textPart2="") {
    let a = document.createElement("a")
    a.href = link
    let i = document.createElement("i")
    i.classList.add("fa")
    i.classList.add(faClass)
    a.textContent = textPart1 + textPart2
    a.prepend(i)
    return a
};

export function aElements(link, aClass, textPart1="", textPart2="") {
    let a = document.createElement("a")
    a.classList.add(aClass)
    a.href = link
    a.textContent = textPart1 + textPart2
    return a
};

export function Ielement(faClass, textPart1="", textPart2="") {
    let i = document.createElement("i")
    i.classList.add("fa")
    i.classList.add(faClass)
    i.textContent = textPart1 + textPart2
    return i
};

export function ulAelement(ulClass="", collection="") {
    let ul = document.createElement("ul")
    ul.classList.add(ulClass)

    collection.forEach(function (element, index) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.href = element["link"]
        a.textContent = element["text"]
        li.append(a)
        ul.append(li)

    });
    return ul
};
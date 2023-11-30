
export async function heroSection() {
    const section = document.createElement("section")
    section.classList.add("page-top-section", "set-bg")
    section.setAttribute("data-setbg", "../img/page-top-bg.jpg")
    section.setAttribute("style", "background-image: url(../img/page-top-bg.jpg);")

    let container = document.createElement("div")
    container.classList.add("container", "text-white")

    let h2 = document.createElement("h2")
   
    h2.textContent = "Detail- ?????"
    container.append(h2)
    section.append(container)
    return section
};
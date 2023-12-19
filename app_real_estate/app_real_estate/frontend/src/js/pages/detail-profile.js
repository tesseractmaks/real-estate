import { jsonToData, setStorageData, deleteStorageData } from "../utils.js"

import { authorCard, relatedProperties } from "../components/profile-components.js"
import { aIelements, anyIelements, buttonElement } from "../components/elements.js"
import { deleteOneProfile } from "../components/list-profiles.js"

// import { pageContainer } from "../../index.js"
import { router } from "../../index.js"

// Profile Detail

async function singleList(detailData) {

    let divSingleList = document.createElement("div")
    divSingleList.classList.add("single-list-content")


    let divRow = document.createElement("div")
    divRow.classList.add("row")

    let divCol8 = document.createElement("div")
    divCol8.classList.add("col-xl-8")
    divCol8.classList.add("sl-title")
    const author = await authorCard(detailData)
    divCol8.append(author)


    divRow.append(divCol8)
    divSingleList.append(divRow)


    // Property Details

    const relatedProp = await relatedProperties()

    let h3 = document.createElement("h3")
    h3.style.textAlign = "center"
    h3.classList.add("sl-sp-title")
    h3.textContent = "Размещенная недвижимость"

    let rowDetail = document.createElement("div")
    rowDetail.classList.add("row")
    rowDetail.classList.add("row-lk")
    rowDetail.append(h3)

    let colSlider = document.createElement("div")
    colSlider.classList.add("col-lg-6")
    colSlider.classList.add("lk-col")

    colSlider.prepend(relatedProp)
    rowDetail.append(colSlider)


    divSingleList.append(rowDetail)

    return divSingleList
};


async function breadcrumb() {
    const divBread = document.createElement("div")
    divBread.classList.add("site-breadcrumb")

    let containerBread = document.createElement("div")
    containerBread.classList.add("container")
    let a = aIelements("/", "fa-home", "Home")

    let span = anyIelements("span", "fa-angle-right", "Profile")
    containerBread.append(a, span)
    divBread.append(containerBread)

    return divBread
}


export async function detailProfile(detailData) {
    const sectionDetail = document.createElement("section")
    let breadcr = await breadcrumb()
    // console.log(breadcr)
    sectionDetail.append(breadcr)
    sectionDetail.classList.add("page-section")
    let spanButtons = document.createElement("span")
    let buttonEdit = await buttonElement("редактировать", ["editButton"], "edit")
    let buttonDelete = await buttonElement("удалить", ["deleteButton"], "delete")
    let buttonModer = await buttonElement("одобрить", ["moderButton"], "moder")
    let divButton = document.createElement("div")
    divButton.classList.add("detailButtons")

    spanButtons.append(buttonDelete, buttonModer, buttonEdit)
    divButton.append(spanButtons)


    let containerDetail = document.createElement("div")
    containerDetail.classList.add("container")
    containerDetail.append(divButton)


    let rowDetail = document.createElement("div")
    rowDetail.classList.add("row")



    let currentPage = "currentPage"
    // let detailData;
    let response;



    if (detailData) {
        // console.log(detailData)


        let colSlider = document.createElement("div")
        colSlider.classList.add("col-lg-8", "single-list-page")

        let singleListContent = await singleList(detailData)


        // console.log(colSlider)
        colSlider.prepend(singleListContent)

        rowDetail.append(colSlider)

        containerDetail.append(rowDetail)
        sectionDetail.append(containerDetail)
    };

    buttonDelete.addEventListener("click", async function (elem) {
        elem.preventDefault();
        console.log(detailData["id"], "=====")
        await deleteOneProfile(detailData["id"])
        router.navigate("/")
        window.location.reload();
    });

    buttonEdit.addEventListener("click", async function (elem) {
        elem.preventDefault();
        router.navigate("/edit/profile/" + `${detailData["id"]}`)
    });
    return sectionDetail

};



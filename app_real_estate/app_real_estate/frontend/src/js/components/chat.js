import { anyIelements, aElements, anyElement } from "../components/elements.js"



export function chatForm() {
    

    let mainDiv = anyElement("div")
    mainDiv.setAttribute("id", "chat-bl")

    let formDiv = anyElement("div", ["chat-popup"])
    formDiv.setAttribute("id", "myForm")
    formDiv.setAttribute("style", "display:none")
    formDiv.innerHTML = '\
    <form action=""class="form-container" id="cht-form">\
        <div id="dots" class="area-ch"></div>\
        <label for="msg"></label>\
        <textarea placeholder="Введите сообщение.." name="msg" value="" required></textarea>\
        <button type="submit" class="btn">Отправить</button>\
        <button type="button" class="btn cancel" id="close-chat">Закрыть</button>\
    </form>'
    // let chatForm = formDiv.querySelector("#cht-form")
    // chatForm.msg.value = recived_msg
    

    let btn = buttonElement("ЧАТ", ["open-button"])
    btn.setAttribute("style", "display:block")
    btn.setAttribute("id", "btn-chat")
    mainDiv.append(btn, formDiv)
  

    return mainDiv
}

export  function btnChat() {
    let mainDiv = anyElement("div", ["btn-chat-popup"])
    mainDiv.setAttribute("id", "btn-chat")
    mainDiv.innerHTML = '<button class="open-button">ЧАТ</button>'
}


function openForm() {
	let myForm = document.querySelector("#myForm").setAttribute("style", "display:block")
	let btnChat = document.querySelector("#btn-chat").setAttribute("style", "display:none")
	// console.log(chatBlock)
  }
  
function closeForm() {
	document.querySelector("#myForm").style.display = "none"
	document.querySelector("#btn-chat").style.display = "block"
  }

  function buttonElement(content, classes = [], idElem) {
    const button = document.createElement("button")

    if (classes.length) {
        button.classList.add(...classes)
    }

    if (content) {
        button.textContent = content
    }

    if (idElem) {
        button.id = idElem
    }

    return button
}


export async function wSocket(ws) {
    let chatForm = document.querySelector("#cht-form")
        // console.log(chatForm.textarea.value,"=-=")

    // ws.send(chatForm.textarea.value)
    ws.send(chatForm.msg.value)

   
    ws.onclose = async function() {
        console.log("Close  -Track   Websockett!!!!!!!!11")
    }
}


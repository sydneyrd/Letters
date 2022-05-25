import { getAuthors, sendLetter, getTopics, getRecipients } from "./dataAccess.js";


const mainContainer = document.querySelector("#container")




export const topicSelect = () => {
    let topics = getTopics()
    let html = topics.map(radioTopics).join("")
    return html
}


const radioTopics = (topic) => {
    let html =
        `<input type="checkbox" class="topic" id="topic" name="topic" value="${topic.id}">${topic.topic}</input>`
    return html
}








export const authorSelect = () => {
    let authors = getAuthors()
    let html = `<select class="authors" name="author" id="author"><option value="authors">Choose</option> ${authors.map(authString).join("")}`
    return html

}

export const recipientSelect = () => {
    let recipients = getRecipients()
    let html = `<select class="recipients" name="recipient" id="recipient"><option value="recipients">Choose</option> ${recipients.map(recipientString).join("")}`
    return html
}




const authString = (author) => {
    let html =
        `<option name="author" value="${author.id}">${author.name}</option>`
    return html
}

const recipientString = (recipient) => {
    let html =
        `<option name="recipient" value="${recipient.id}">${recipient.name}</option>`
    return html
}


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userauthor = parseInt(document.querySelector("#author").value)
        const userrecipient = parseInt(document.querySelector("#recipient").value)
        // const usertopic = parseInt(document.querySelector("#topic").value)
        const usertext = document.querySelector('textarea[name="body"]').value
        let topics = []
        const checkboxes = document.querySelectorAll(
            "input[type=checkbox]:checked"
        )
        checkboxes.forEach((checkbox) => {
            topics.push(parseInt(checkbox.value))
        });



        // Make an object out of the user input
        const dataToSendToAPI = {
            author: userauthor,
            recipient: userrecipient,
            topicIds: topics,
            text: usertext,
            date: new Date().toDateString()
        };
        if (
            dataToSendToAPI.userauthor === undefined ||
            dataToSendToAPI.userrecipient === undefined ||
            dataToSendToAPI.usertext === ""
        )
         {
            window.alert("Please actually fill out all the things before you hit send, cmon.")
        } else {

            sendLetter(dataToSendToAPI)
        }
    }
})



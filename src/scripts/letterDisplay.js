import { getLetters, getRecipients, getTopics, getAuthors } from "./dataAccess.js"







export const letterDisplay = () => {
    const letters = getLetters()
 return letters.map(letter => {
    return `<article id="letterText">Dear ${findRecipient(letter).name} (${findRecipient(letter).email})<p>
    ${letter.text}</p>
    Sincerely, ${findAuthor(letter).name} (${findAuthor(letter).email})
    Sent on ${letter.date}</article><br>
    ${findTopics(letter)}`}).join("")
}








const findRecipient = (letterObj) => {
    const recipients = getRecipients()
    return recipients.find(a => a.id === letterObj.recipient)
}

const findAuthor = (letterObj) => {
    const authors = getAuthors()
    return authors.find(a => a.id === letterObj.author)
}

const findTopics = (letterObj) => {
    const topics = getTopics()  //get the topic list
     const topicIds = letterObj.topicIds //just the topics on the letter
     let html = ``
     topics.forEach((topic) => {
         if (topicIds.includes(topic.id)) //grab the correct topic from the ids on the letters
         html += `<p class="topic" value="${topic.id}">${topic.topic}</p>`
     })
     return html
}



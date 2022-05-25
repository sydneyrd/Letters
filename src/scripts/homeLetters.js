import { authorSelect, topicSelect, recipientSelect } from "./letterForm.js"
import { letterDisplay } from "./letterDisplay.js"



export const homePageHTML = () => {
    let htmlString = 
    `<section class="form">
    <h4>Choose an Author</h4>
    ${authorSelect()}</select><br>
    
    

    <textarea placeholder="Say Hello, or don't idc" id="letterText" name="body" rows="20" cols="20">
    </textarea>
    <h4>Choose a topic</h4>
    <article id="radioButtons">
    ${topicSelect()}</article>
    <h4>Choose a Recipient</h4>
    ${recipientSelect()}</select><br>
  
    <button class="button" id="sendLetter"> Send </button>

  </section>
  <section id="letterDisplay">
  ${letterDisplay()}
  </section>`
    return htmlString
}

/// 
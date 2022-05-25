import { homePageHTML } from "./homeLetters.js"
import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopics, sendLetter } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")





const render = () => {
    fetchLetters()
        .then(() => fetchAuthors())
        .then(() => fetchTopics())
        .then(() => fetchRecipients())
        .then(
            () => {
                mainContainer.innerHTML = homePageHTML()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
       
            render()
        }
    
)



const applicationState = {
    Letters: [],
    Authors: [],
    Topics: [],
    Recipients: [],

}
const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchLetters = () => {
    return fetch(`${API}/Letters`)
        .then(response => response.json())
        .then(
            (data) => {
                // Store the external state in application state
                applicationState.Letters = data
            }
        )
}

//returns a copy of the database
//export const getLetters = () => {
  //  return applicationState.Letters.map(Letter => ({ ...Letter }))
//}

export const getLetters = () => {
    applicationState.Letters.forEach((letterObj) => {
        if (letterObj.topicIds === undefined) {
            letterObj.topicIds = []
            letterObj.topicIds.push(letterObj.topicIds)
        }
    })
    return applicationState.Letters.map(Letter => ({...Letter}))
}



export const getTopics = () => {
    return applicationState.Topics.map(Topic => ({ ...Topic }))
}
export const getAuthors = () => {
    return applicationState.Authors.map(Author => ({ ...Author }))
}
export const getRecipients = () => {
    return applicationState.Recipients.map(Recipient => ({ ...Recipient }))
}
export const fetchAuthors = () => {
    return fetch(`${API}/Authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.Authors = data
            }
        )
}

export const fetchTopics = () => {
    return fetch(`${API}/Topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.Topics = data
            }
        )
}



export const sendLetter = (letter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letter)
    }

    return fetch(`${API}/Letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}



export const fetchRecipients = () => {
    return fetch(`${API}/Recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.Recipients = data
            }
        )
}


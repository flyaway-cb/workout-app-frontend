const BASE = "http://localhost:3000"

let addMove = function(form){
  return fetch(BASE+"/users", {
    body: JSON.stringify(form),
    header: {'Content-Type': 'application/json'
    },
    method: "POST"
  }).then(handleErrors)
  .then( rawResponse => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  }).catch(error => {
    console.log("error")
  })
}


let handleErrors = function(response){
  if(!response.ok){
    throw Error(response.statusText)
  }
  return response
}

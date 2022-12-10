var form = document.getElementById("form");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var publish = document.getElementById("publish");
var myStorage = window.localStorage;


function handleForm(event) {
    event.preventDefault();
    addNewQA(question.value, answer.value, publish.checked);
}
form.addEventListener('submit', handleForm);
document.addEventListener("DOMContentLoaded", loadStorage);


function loadStorage() {
    if (myStorage.getItem("qa") == null) {
        return
    }
    var state = JSON.parse(localStorage.qa)

    state.forEach(e => {
        renderQA(e)
    });
}



function addNewQA(q, a, b) {
    
    if (myStorage.getItem("qa") == null) {
        myStorage.setItem("qa", JSON.stringify([]))
    }

    var oldState = JSON.parse(localStorage.qa)
    oldState.push([q, a, b])
    myStorage.qa = JSON.stringify(oldState)
    renderQA([q, a, b])
}


function renderQA(newEl) {
    var table = document.getElementById("table")

    table.appendChild(htmlToElement(`\
        <tr> \
            <td>${newEl[0]}</td>\
            <td>${newEl[1]}</td>\
            <td><input type='checkbox' name='' id='' ${newEl[2] ? "checked" : ""}></td>\
        </tr>`))

}




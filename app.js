var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    console.log(serverURL + "?" + "text=" + input)
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("somthing wrong with server! try again after some time")
}

function clickHandler() {
    // var inputText=txtInput.value; //taking input    

    // calling server for processing
    fetch(getTranslationURL(txtInput.value))
        .then(response => response.json())
        .then(json=> {
            var translated=json.contents.translated;
            outputDiv.innerText=translated;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
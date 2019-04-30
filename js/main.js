var xmlhttp;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var jokeURL = "http://api.icndb.com/jokes/random/?firstName=";
jokeURL += firstName;
jokeURL += "&lastName=";
jokeURL += lastName;

window.onload = function () {
    document.addEventListener("deviceready", init, false);
    init();
};

function init() {
    document.getElementById('btnGetJoke').addEventListener('click', getJoke, false);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = receiveJoke;
}

function getJoke() {
    xmlhttp.open('GET', jokeURL, true);
    xmlhttp.send();
}

function receiveJoke() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
        var json = jQuery.parseJSON(xmlhttp.responseText);
        document.getElementById('joke').innerHTML = json.value.joke;
    }
}
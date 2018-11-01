// alert("javascript virker");

window.addEventListener("load", sidenVises);

function sidenVises() {

    console.log("siden vises");
    showStart();



}

function showStart() {


    console.log("show start");

    // vis startskærm

    document.querySelector("#start").classList.remove("hide");

    //start animation på start-knap

    document.querySelector("#play").classList.add("pulsknap");

    document.querySelector("#play").addEventListener("click", hideStart);

}

function showSettings() {}


function hideStart() {

    document.querySelector("#play").removeEventListener("click", hideStart);
    console.log("hide start");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);


}

function startGame() {

    console.log("show game");


    document.querySelector("#start").removeEventListener("animationend", startGame);


    document.querySelector("#start").classList.add("hide")

    document.querySelector("#skab").classList.add("show");
    document.querySelector("#tonder").classList.add("show");
    document.querySelector("#gulv").classList.add("show");
    document.querySelector("#gulv2").classList.add("show");
    document.querySelector("#gulv3").classList.add("show");
    document.querySelector("#timer").classList.add("show");
    document.querySelector("#liv").classList.add("show");
    document.querySelector("#liv2").classList.add("show");
    document.querySelector("#liv3").classList.add("show");


    document.querySelector("#hund").classList.add("show");
    document.querySelector("#hund2").classList.add("show");
    document.querySelector("#mus").classList.add("show");
    document.querySelector("#mus2").classList.add("show");



    document.querySelector("#hund").classList.add("pulseanimal");
    document.querySelector("#hund2").classList.add("pulseanimal");
    document.querySelector("#mus").classList.add("pulseanimal");
    document.querySelector("#mus2").classList.add("pulseanimal");

}


function nyFunction() {


}

function clickMus() {


}

function musGone() {


}

function clickHund() {


}

function hundGone() {


}

function gameOver() {


}

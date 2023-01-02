let scoreOne = document.getElementById("score-one")
let scoreTwo = document.getElementById("score-two")
let countHome = 0
let countAway = 0

function oneHome() {
 countHome += 1
 scoreOne.innerText = countHome
}

function twoHome() {
countHome += 2
 scoreOne.innerText = countHome
}

function threeHome() {
 countHome += 3
 scoreOne.innerText = countHome
}

function oneAway() {
    countAway += 1
 scoreTwo.innerText = countAway

}

function twoAway() {
countAway += 2
 scoreTwo.innerText = countAway
}

function threeAway() {
    countAway += 3
 scoreTwo.innerText = countAway
 
}


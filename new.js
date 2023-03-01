let homeScore = document.getElementById("h-score")
let count = 0

function updateHomeScore(num) {
    count += num
    if (count >= 0) {
        homeScore.innerText = count
    } else {
        count = 0
        homeScore.innerText = count
    }
}

function subtract1() {
    updateHomeScore(-1)
}

function add1() {
    updateHomeScore(1)
}

function add2() {
    updateHomeScore(2)
}

function add3() {
    updateHomeScore(3)
}

// maybe try to find a better way to make the previous and reset function for both home and guest
let homePrev = document.getElementById("h-prev")
let newItem = 0

function reset() {
    newItem = count
    count = 0
    homeScore.innerText = count
}

function previous() {
    count = newItem
    homeScore.innerText = newItem
}

// functions belonging to the guest
let guestScore = document.getElementById("g-score")
let count2 = 0

function updateGuestScore(num) {
    count2 += num
    if (count2 >= 0) {
        guestScore.innerText = count2
    } else {
        count2 = 0
        guestScore.innerText = count2
    }
}

function subtracts1() {
    updateGuestScore(-1)
}

function adds1() {
    updateGuestScore(1)
}

function adds2() {
    updateGuestScore(2)
}

function adds3() {
    updateGuestScore(3)
}

let guestPrev = document.getElementById("g-prev")
let newItem2 = 0

function resets() {
    newItem2 = count2
    count2 = 0
    guestScore.innerText = count2
}

function previous2() {
    count2 = newItem2
    guestScore.innerText = newItem2
}

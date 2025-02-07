const bilde = document.getElementById("kortbilde");
const forrigeBilde = document.getElementById("forrigeKort")
const higherButton = document.getElementById("higher");
const lowerButton = document.getElementById("lower");
const scoreDisplay = document.getElementById("score");
const startSpill = document.getElementById("startKnapp");

let score = 0;
let currentCardValue = 0;
let ikkeTapt = false

function trekkkort() {
    const tall = Math.floor(Math.random() * 13) + 1;
    const sort = Math.floor(Math.random() * 4) + 1;
    let a = "";

    if (sort === 1) {
        a = "_of_diamonds.png";
    } else if (sort === 2) {
        a = "_of_spades.png";
    } else if (sort === 3) {
        a = "_of_hearts.png";
    } else if (sort === 4) {
        a = "_of_clubs.png";
    }

    forrigeBilde.src = bilde.src
    const bildeSrc = `${tall}${a}`
    bilde.src = "kortstokk/" + bildeSrc;

    return tall
}

function startGame() {
    ikkeTapt = true
    score = 0
    trekkkort();
    forrigeBilde.src = "kortstokk/red_joker.png"
}

function oppdaterScore() {
    scoreDisplay.textContent = score;
}
startSpill.addEventListener("click", () => {
    if (ikkeTapt == false) {
        startGame()
    }
})

higherButton.addEventListener("click", () => {
    if (ikkeTapt) {
        const nyttTall = trekkkort();
        if (nyttTall == 1){
            okScore
        } else if (nyttTall >= currentCardValue) {
            okScore()
        } else {
            visAlert("Feil! Det var ikke høyere.");
        }
        currentCardValue = nyttTall;

    }
});

lowerButton.addEventListener("click", () => {
    if (ikkeTapt) {
        const nyttTall = trekkkort();
        if(nyttTall == 1){
            okScore
        } else if (nyttTall <= currentCardValue) {
            okScore()
        } else {
            visAlert("Feil! Det var ikke lavere.")
        }
        currentCardValue = nyttTall;
    }
});

function okScore() {
    score += 1;
    oppdaterScore();
}

function visAlert(melding) {
    ikkeTapt = false
    setTimeout(() => {
        alert(melding);
        score = 0;
        oppdaterScore();
    }, 1000);

}
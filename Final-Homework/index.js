//const Char_Animal_List = ['いぬ', 'ねこ', 'ねずみ', 'くま', 'おおかみ', 'うし', 'ぶた', 'ひつじ', 'みつばち', 'かめ', 'へび', 'かえる', 'わに', 'にわとり', 'うさぎ', 'かえ', 'ろば', 'かちく', 'ひよこ', 'がちょう', 'しか', 'あひる', 'かも', 'むし', 'きりん', 'らくが', 'はぶ', 'そう', 'きうね', 'かば', 'たぬき', 'あらいぐま']

const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false

function flipCard() {
    if (lockBoard) return
    if (this === firstCard) return
    this.classList.toggle('flip')

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true
        firstCard = this

        return;
    }
    //second click
    secondCard = this

    checkForMatch()
}

function checkForMatch() {
    //do cards match?

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework

    isMatch ? disableCards() : unflipedCards()
}

function disableCards() {
    //It's a match!
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

function unflipedCards() {
    lockBoard = true
    // not a match
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard()
    }, 1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 48) // acho que 48 é o número de cards antes era 64 mas removi 16 cartas
        card.style.order = randomPos
    })
})();

cards.forEach(card => card.addEventListener('click', flipCard))
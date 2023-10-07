"use srtict"

const numberOfCards = 12;
const delayTime = 1000;

let  invertedCard = false;

let firstInvertedCard;
let secondInvertedCard;
let allCards = document.querySelectorAll(".memory-card");


function resetsValue(){
    invertedCard = false;
    firstInvertedCard = null;
    secondInvertedCard = null;
}

function cardsOriginalState(){
    setTimeout(function(){
        firstInvertedCard.classList.remove("flip")
        secondInvertedCard.classList.remove("flip")
        resetsValue();
    }, delayTime)
}

function matchingCards(сardOne, cardTwo){
    if(сardOne.dataset.framework === cardTwo.dataset.framework){
        cardBlocking(сardOne, cardTwo);
    } else {
        cardsOriginalState();
    }
}

function cardClickHandler(e){
    if(firstInvertedCard && secondInvertedCard){
        return;
    }

    const card = e.target.closest('.memory-card');
    
    if(card === firstInvertedCard){
        return
    }

    card.classList.add("flip");

    if(!invertedCard){
        invertedCard = true;
        firstInvertedCard = card;
        return;
    } else {
        secondInvertedCard = card;
    }

    matchingCards(firstInvertedCard, secondInvertedCard)
}

function boardInitialization(cards){
    for (const card of cards) {
        const random = Math.floor(Math.random() * numberOfCards);
        card.style.order = random;
        card.addEventListener("click", cardClickHandler)
        
    }
}

function cardBlocking(сardOne, cardTwo){
    console.log(сardOne, cardTwo);
    сardOne.removeEventListener("click", cardClickHandler)
    cardTwo.removeEventListener("click", cardClickHandler)  
    
    resetsValue();
}

boardInitialization(allCards)


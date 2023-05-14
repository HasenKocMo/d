
function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}


let cards = []
//let eliminated = [] maybe

// где то тут splt и в список/ запушить проклятия

class Card{
    constructor() {
        this.text = this.text = cards[this.cardid]

        this.cardid = getRandomInt(1,cards.length)

        display() {
            // здесь вывод текста на карту
            // eliminated.push(cards[this.cardid]) maybe
            delete cards[this.cardid]
            }
    }                    
}



var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 600,
    complete: function(anim){
       playing = false;
    }
  });
});

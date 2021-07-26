function getRandomInt (min, max) {
    return Math.floor(Math.random()*(max-min) +min);
}

let buttonGatherTroopsOne = document.querySelector('.buttonGatherTroopsOne');
let buttonGatherTroopsTwo = document.querySelector('.buttonGatherTroopsTwo');
let troopsOne = document.querySelector('.troopsOne');
let troopsTwo = document.querySelector('.troopsTwo');
let fight = document.querySelector('.fight');
let fightResult = document.querySelector('fightResult');


buttonGatherTroopsOne.addEventListener ('click', function(){
let randomElementOne = getRandomInt (1, 1000);
troopsOne.textContent = randomElementOne;
});

buttonGatherTroopsTwo.addEventListener ('click', function(){
    let randomElementTwo = getRandomInt (1, 1000);
    troopsTwo.textContent = randomElementTwo;
    });

fight.addEventListener ('click', function(){
    fightResult.textContent = 'lul';
});





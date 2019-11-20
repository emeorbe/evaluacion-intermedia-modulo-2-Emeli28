'use strict';
const hola = 'hola';
console.log(hola);

//llamo a los elementos para que hagan algo

const elementInput = document.querySelector ('#addinput');
const elementButton = document.querySelector ('#button1');
const elementChangeText = document.querySelector ('#cange_clue');
const elementCountRound = document.querySelector ('#countround');

//generador de números aleatorios.

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    
  }

const randomNumer = getRandomNumber(100)
console.log(randomNumer)
  

  //añadir función que opere el número aleatorio, cambie los textos al oír el click

  function changeThings (){

    console.log(getRandomNumber(100));
    console.log(elementInput.value);
    
    takeNumbers(randomNumer);
    sumCount();
  
  }

  //ejecutar la comparación

  function takeNumbers (num) {

    if (elementInput.value > randomNumer){
        elementChangeText.innerHTML = 'El número es muy alto';
    }
     else if (elementInput.value < randomNumer) {
        elementChangeText.innerHTML = 'Guapi, sigue probando';
    }
    
    else {elementInput.value === randomNumer 
        elementChangeText.innerHTML = 'Has ganado, campeona';
    }

  }

  //contador

  let count = 0;

    function sumCount () {
    count = count + 1;

    elementCountRound.innerHTML = 'Número de intentos es: ' + `${count}`;
    
    }




//llamo al botón para que ejecute la acción que quiero y OJO añadir para que me ejecute todo
elementButton.addEventListener('click', changeThings);


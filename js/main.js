console.log('js is wired!');

let theButton = document.querySelector('button'),
    theList = document.querySelector('ul');
// rules for worrking with / creating objects

// 1. needs a name, wrapped in curly bracckets
// 2. commas between keys

let coffeeCup = {
    // descriptive keys: properties
    color : "white", //String
    lidcolor : "grey", //String
    height : 20, //Number
    contents : "cappucino", //String

    // functional keys: methods (things an object can do)
    drink: () => {console.log('sippy sip')},
    mix: () => {console.log('add cream, sugar, etc')}
};

// functions go here
function listProps() {
    // debugger;
    for (prop in coffeeCup) { //prop is short for property
        console.log(prop);

        let newProp = document.createElement('li');
        newProp.textContent = prop;

        theList.appendChild(newProp);
    }
}

// add event handling here
theButton.addEventListener('click', listProps);

// let dogName = {
//     color : "skin",
//     breed : "labrador retrievers",
//     name : "jack",
//     age : "three",

//     favoritefood : () => {console.log('peddigiri')},
// };





console.log('its working');

let theButton = document.querySelectorAll('button'),
    theList = document.querySelector('ul');

// rules for working with/creating objects
// 1. need a name
// 2. commas between keys

let profs = {
    marco : {
        name : 'Marco',
        role : 'Coordinator',
        nickname : 'marco',
        bio : 'some interesting info about marco',
        avatar : 'marco.jpg'
    },

    joe : {
    name : 'Joe',
    role : 'Digital Media Theory and Project Management',
    nickname : 'teddy bear',
    bio : 'some interesting info about joe',
    avatar : 'joe.jpg'
    },

    john : {
        name : ' john',
        role : 'Motion Design',
        nickname : 'teddy bear',
        bio : 'some interesting info about  john',
        avatar : ' john.jpg'
        },
};

//functions go here
function listProfs() {
    // empty out the list
        theList.innerHTML ="";
    // and then repopulate it with the correct data
    
    
    for (item in profs[this.dataset.prof]) {
        let newItem = document.createElement('li');

        newItem.textContent = profs[this.dataset.prof][item];
        theList.appendChild(newItem);
    }
}

// add event handling here
theButtons.forEach(profButton => profButton.addEventListener('click', listProfs));
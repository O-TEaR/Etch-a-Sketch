let divContainer = document.querySelector('#container');
let divTotal = 16 ** 2;
makeGrid();

function makeGrid() { // creates initial grid
    for (i = 0; i < divTotal; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.border = '1px solid black';
        newDiv.style.minHeight = '35px';
        newDiv.style.minWidth = '15px';
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'black';
        });
        divContainer.appendChild(newDiv);
    }
}

let button = document.querySelector('#button'); 
button.addEventListener('click', () => { // when user clicks button a function containing the following code runs
    userInput = prompt('What would you like to change the size to? note: the max is 100.');
    gridSize();
    if (userInput == 'null' || userInput == null || userInput == '') {
        return;
        }
    else if (userInput <= 100) {
        CssGrid();
        createNewGrid();
    }
    else return;
});

function CssGrid() { // changes css grid layout values to accomodate any newly made etch-a-sketch grid
    let columnLayout = '';
    for (i = 0; i < userInput; i++) {
        columnLayout += '50px ';
    };
    divContainer.style.gridTemplateColumns = `${columnLayout}`;
}

function gridSize() { // determines how many divs the grid will have
    if (userInput <= 100) {
        divTotal = Number(userInput) ** 2;
    }
}

function createNewGrid() { // deletes all of the current container's children. and creates a new grid with new info by calling the makeGrid function
    divContainer.innerHTML = '';
    makeGrid();
}
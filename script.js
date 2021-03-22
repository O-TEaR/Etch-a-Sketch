let divContainer = document.querySelector('#container');

let button = document.querySelector('#button');
button.addEventListener('click', () => {
    let sizeChange = prompt('What would you like to change the size to? note: the max is 100.');
    console.log(sizeChange);
});

for (i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.border = '1px solid black';
    newDiv.style.minHeight = '35px';
    newDiv.style.minWidth = '15px';
    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'black';
    });
    divContainer.appendChild(newDiv);
}


let divContainer = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.border = '1px solid black';
    newDiv.style.backgroundColor = 'green';
    newDiv.textContent = [i];
    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'black';
    });
    divContainer.appendChild(newDiv);
}
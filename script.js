let divContainer = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = 'green';
    newDiv.textContent = [i];
    divContainer.appendChild(newDiv);
 }
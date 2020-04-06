var block = document.getElementById('block'),
    newParagraph1 = document.createElement('p'),
    newParagraph2 = document.createElement('p'),
    key = {path: 'https://google.com'};

block.appendChild(newParagraph1);
block.appendChild(newParagraph2);

newParagraph1.innerHTML += '<a href="https://www.google.ru">Google</a> asdafgdghjgfd <a href="https://www.google.ru">Google</a>';
newParagraph2.innerHTML += '<a href="https://www.google.ru">Google</a> asdsdfghjgfds <a href="https://www.google.ru">Google</a>';

newParagraph2.addEventListener('click', function(event) {
    event.preventDefault();
    if (localStorage.getItem(newParagraph2.firstElementChild.innerText) == null) {
        localStorage.setItem(newParagraph2.firstElementChild.innerText , JSON.stringify(key));
        alert('Link saved!');
    } else { 
        alert( newParagraph2.firstElementChild.getAttribute('href') );
    }
});
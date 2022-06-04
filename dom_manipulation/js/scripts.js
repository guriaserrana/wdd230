
const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        const entry = input.value;
        input.value = '';

        const bookChap = document.createElement('li');
        const listText = document.createElement('span');
        const newBtn = document.createElement('button');

        bookChap.appendChild(listText);
        listText.textContent = entry;
        bookChap.appendChild(newBtn);
        newBtn.textContent = '\u274C';
        list.appendChild(bookChap);

        newBtn.addEventListener('click', () => {
          list.removeChild(bookChap);
        });

        input.focus();
    });

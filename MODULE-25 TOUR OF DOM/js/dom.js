//create dynamic section in js a section  ,a ul , ul have 5   li  ,,,and set id for section  name section-container ,,,,set id for ul ul-container and set class for li  name item;
const sectionContainer = document.querySelector('main');
const section = document.createElement('section');
section.id = 'section-container';
section.style.backgroundColor = 'pink';
section.style.padding = '20px';
section.style.border = '1px solid blueviolet';
section.style.borderRadius = '20px';
sectionContainer.appendChild(section);

const h1 = document.createElement('h1');
h1.innerText = 'I am dynamic section';
h1.style.color = 'red';
section.appendChild(h1);

const ul = document.createElement('ul');
ul.id = 'ul-container';
section.appendChild(ul)


const h2 = document.createElement('h2');
h2.innerText = 'Some list';
ul.appendChild(h2);

for (i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText = `item${i}`;

    ul.appendChild(li);
}

console.log(section);

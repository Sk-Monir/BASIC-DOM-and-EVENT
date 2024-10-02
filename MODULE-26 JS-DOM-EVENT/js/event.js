// option--1 directly set on html element
// <button onclick="document.body.style.backgroundColor='yellow'">I am onclick() color inline js dom event coloryellow</button><br><br>



// option --2 add function onclick call in html element
// <button onclick="colorRed()">I am onclick() js dom event color red</button><br><br>

function colorRed() {
    document.body.style.backgroundColor = 'red';
}

// option--3 add function target with getElementById
//way-1
const makeBlueBtn = document.getElementById('color-blue');
makeBlueBtn.onclick = colorBlue; //assign function only no call
function colorBlue() {
    document.body.style.backgroundColor = 'blue';
}
// way -2 direct assign function
const makePurpleBtn = document.getElementById('color-purple');
makePurpleBtn.onclick = function colorPurple() {
    document.body.style.backgroundColor = 'purple';
}

// option -- 4 addEventListener
// way-- 1 call function
const colorPink = document.getElementById('color-pink')
colorPink.addEventListener('click', makeColorPink);
function makeColorPink() {
    document.body.style.backgroundColor = 'pink';
}
//way-- 2 direct function add
const colorGreen = document.getElementById('color-green');
colorGreen.addEventListener('click', function makeColorGreen() {
    document.body.style.backgroundColor = 'green';
});
//way -- direct function no name every thing in one line
document.getElementById('color-magenta').addEventListener('click', function () {
    document.body.style.backgroundColor = 'magenta';
});
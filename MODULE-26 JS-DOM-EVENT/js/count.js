const number = document.getElementById('number');
const countPlus = document.getElementById('countPlus')
const countMinus = document.getElementById('countMinus')
let count = 0;
countPlus.addEventListener('click', function () {
    count += 1;
    number.innerText = count;
});
countMinus.addEventListener('click', function () {
    count -= 1;
    number.innerText = count;
});
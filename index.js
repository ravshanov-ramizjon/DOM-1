


const title = document.querySelector('h2');
const btnMin = document.querySelector('.min');
const btnC = document.querySelector('.c');
const btnPlus = document.querySelector('.plus');

let counter = 0;

btnMin.onclick = () => {
    counter--;
    title.innerHTML = counter;
};

btnC.onclick = () => {
    counter = 0;
    title.innerHTML = counter;
};

btnPlus.onclick = () => {
    counter++;
    title.innerHTML = counter;
};

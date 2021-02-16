document.body.style.backgroundColor = "white";
const bmText = document.querySelector("#BMtext");

const frenchLink = document.querySelector("#FP");
const expressoLink = document.querySelector("#EX");
const dripLink = document.querySelector("#DR");
const brewingLink = document.querySelector("#BR");

const frenchText = document.querySelector("#FPText");

frenchLink.addEventListener('click', frenchPress);
expressoLink.addEventListener('click', expresso);
dripLink.addEventListener('click', drip);
brewingLink.addEventListener('click', brewing)



function frenchPress() {
    bmText.textContent = "French Press info condensed."
}

function expresso() {
    bmText.textContent = "Expresso is made using a paticular machine which forces hot water over the grounds at high pressure.  \
    This exctracts the same mount of coffee that would end up in a cup and compresses it into a small shot.";
}

function drip() {
    bmText.textContent = "Drip coffee is definitely the most common exptration method.  A device, such as a typical coffee maker, \
    drops boiling water over grounds contained in a filter.  THis extracts the coffee and passes through a filter to keep the grounds out of the cup.";
}

function brewing() {
    bmText.textContent = "Finally the brewing process will dictate the overall character of the coffee drink.  I'll give a little info about expresso drinks speciffically";
}

document.body.style.backgroundColor = "white";
// const BMText = document.querySelector(".BMtext");

const frenchLink = document.querySelector("#FP");
const expressoLink = document.querySelector("#EX");
const dripLink = document.querySelector("#DR");
const brewingLink = document.querySelector("#BR");

const frenchPic = document.querySelector("#FPPic");
const dripPic = document.querySelector("#DRPic");
const exPic = document.querySelector("#EXPic");
const brewPic = document.querySelector("#BMPic");

const brewText = document.querySelector(".BMText");
const frenchText = document.querySelector(".FPText");
const xpressText = document.querySelector(".EXText");
const dripText = document.querySelector(".DRText");

frenchLink.addEventListener('click', frenchPress);
expressoLink.addEventListener('click', expresso);
dripLink.addEventListener('click', drip);
brewingLink.addEventListener('click', brewing)

frenchText.remove()
xpressText.remove()
dripText.remove()
// brewText.remove()
const paragraph = document.querySelector('.paragraph')




frenchPic.style.display = "none";
dripPic.style.display = "none";
exPic.style.display = "none";
// bmText.style.display = "none" Dosen't work with text.





function frenchPress() {
    brewText.textContent = frenchText.innerText
    toggleOff([brewPic, dripPic, exPic]);
    // brewOff();
    frenchPic.style.display = "inline-block";
    // switchText(frenchText);
}

function expresso() {
    // BMText.textContent = "Expresso is made using a paticular machine which forces hot water over the grounds at high pressure.  \
    // This exctracts the same mount of coffee that would end up in a cup and compresses it into a small shot.";
    brewText.textContent = xpressText.innerText
    toggleOff([brewPic, dripPic, frenchPic]);
    exPic.style.display = "inline-block";
    // switchText(xpressText);
}

function drip() {
    // BMText.textContent = "Drip coffee is definitely the most common exptration method.  A device, such as a typical coffee maker, \
    // drops boiling water over grounds contained in a filter.  THis extracts the coffee and passes through a filter to keep the grounds out of the cup.";
    brewText.textContent = dripText.innerText
    toggleOff([brewPic, frenchPic, exPic]);
    dripPic.style.display = "inline-block";
    // switchText(dripText);
}

function brewing() {
    // BMText.textContent = "Finally the brewing process will dictate the overall character of the coffee drink.  I'll give a little info about expresso drinks speciffically";
    brewText.textContent = "Finally the brewing process will dictate the overall character of the coffee drink.  I'll give a little info about expresso drinks speciffically";
    toggleOff([dripPic, frenchPic, exPic]);
    BMPic.style.display = "inline-block";
    // switchText(brewText);
}

function toggleOff(content) {
    for (let i = 0; i < content.length; i++) {
        content[i].style.display="none";
    }
}



function switchText(input) {
    // frenchText.remove();
    // xpressText.remove();
    // dripText.remove();
    // brewText.remove();
    // paragraph.removeChild(brewText)
    // paragraph.removeChild(input)
    const pInsert = document.createElement('p');
    pInsert.innerText = input.innerText;
    pInsert.classList.add('BMText');
    paragraph.appendChild(pInsert);
    // const InsertText = document.querySelector('.InsertClass')
    
    
    
}

// function brewOff() {
//     brewPic.style.display="none";
// }
// I don't think it removes the element that was appended even if the insert is 
// given the right class name.


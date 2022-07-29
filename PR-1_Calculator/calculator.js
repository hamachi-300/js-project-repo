let input = document.getElementById('input');
let btn = document.getElementById('btn');
let output = document.getElementById('output');

//theme change section
let body = document.body;
let themeBt = document.querySelector('#themeBt');

function calculate() {
    let number = Number(input.value);
    let text = ''

    if (number < 1 || number > 999){
        console.log("error");
        output.innerHTML = "ERROR: input must between 1 - 999";
        output.classList.add('error')

    } else {
        output.classList.remove('error')
        for (let n=1; n<=12; n++) {
            console.log(String(number), ' x ', String(n), ' = ', String(number * n));
            text += String(number) + ' x ' + String(n) + ' = ' + String(number * n) + "</br></br>";
        }
        output.innerHTML = text;
    }
}

btn.addEventListener('click', calculate);

themeBt.addEventListener('click', () => {
    body.classList.toggle('db');
});
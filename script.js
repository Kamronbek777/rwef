let numberOne = +prompt("Birinchi sonni kiriting");
let numberTwo = +prompt("Ikkinchi sonni kiriting");
let message = +prompt(`Amalni tanlang
1. Qoshish
2. Ayirish
3. Bolish
4. Kopaytirish
Amalni tanlang 1/2/3/4`);

if (message == 1) {
    alert(`${numberOne + numberTwo}`)
}else if (message == 2) {
    alert(`${numberOne - numberTwo}`)
}else if (message == 3) {
    alert(`${numberOne / numberTwo}`)
}else {
    alert(`${numberOne * numberTwo}`)
}
const menu = document.querySelector("#menu")
const hambutton = document.querySelector('nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('show');
    hambutton.classList.toggle('show');
});


function calculateBudget() {
    const numGests = parseInt(document.getElementById("pax").value, 10);
    const valorstate = parseInt(document.getElementById("valorstate").value, 10);
    console.log(numGests);

    let totalGuests;
    if (numGests === 50) {
        document.getElementById("valor").value = numGests * 228000;
        document.getElementById("totalevent").value = valorstate + (numGests * 228000);

    } else if (numGests === 80) {
        document.getElementById("valor").value = numGests * 185000;
        document.getElementById("totalevent").value = valorstate + (numGests * 185000);

    } else if (numGests === 100) {
        document.getElementById("valor").value = numGests * 167000;
        document.getElementById("totalevent").value = valorstate + (numGests * 167000);

    } else if (numGests === 200){
        document.getElementById("valor").value = numGests * 132000;
        document.getElementById("totalevent").value = valorstate + (numGests * 132000);
    }

}




function sendInfo(event) {
    event.preventDefault();
    const formulary = document.getElementById("formulary");
    const result = document.getElementById("result");
    // const totalbudget = calculateBudget();
    // const result = document.getElementById("value");
    // result.innerText = `$${totalBudget.toLocaleString()}`;
    formulary.style.display = "none";
    result.style.display = "block";
    calculateBudget();
};


console.log(totalGuests);

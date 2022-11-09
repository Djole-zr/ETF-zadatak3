const oboji = document.querySelectorAll('button')[0];
const dodajSlike = document.querySelectorAll('button')[1];

function zeleno() {
    const farbanje = document.querySelectorAll('[name="field"]');
    for(let polje of farbanje) {
        polje.classList.add('green');
    }
}

function dodavanjeSlika() {
    const slike = document.querySelectorAll('img');
    for(let slika of slike) {
        slika.setAttribute('src', 'ico.png');
    }
}

oboji.addEventListener('click', function () { 
    zeleno();
})

dodajSlike.addEventListener('click', function () { 
    dodavanjeSlika();
})


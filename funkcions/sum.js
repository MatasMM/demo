const s1 = 7 + 5;
console.log(s1);

const s2 = 777 + 55;
console.log(s2);

const s3 = 777 + 555;
console.log(s3);

function add(pirmasSkaicius, antrasSkaicius){
    // turim gauti 2 skaicius
    console.log('>>>', pirmasSkaicius);
    console.log('>>>', antrasSkaicius);

    // juos susumuoti
const suma = pirmasSkaicius + antrasSkaicius;
console.log('>>>>', suma);

    //grazinti sumos rezultata
    return suma;
}

const s4 = add(7, 5);
console.log(s4);

const s5 = add(77, 55);
console.log(s5);

// Prekes kaina 100 Eur
// Reikia funkcijos, kuri grazina pilna suformuota kaina su PVM,
// kuri bus naudojama ant prekes etiketes.
// Pvz.: 121 Eur

function kainaSuPVM(kainaBePVM) {
    const PVM = 21;
    const coof = 1 + PVM / 100;
    const galutineKaina = kainaBePVM * coof;

    return galutineKaina + ' Eur';
}

const kaina1 = 100;
const kainaSuPVM1 = kainaSuPVM(kaina1);
console.log(kainaSuPVM1);

const kaina2 = 200;
const kainaSuPVM2 = kainaSuPVM(kaina2);
console.log(kainaSuPVM2);

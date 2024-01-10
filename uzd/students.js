// Koks yra klases pazymiu vidurkis?
// Kokia yra klases pazymiu mediana?
// Koks yra maziausias pazymys?
// Koks yra didziausias pazymys?
// Koks yra skirtumas tarp didziausio ir maziausio pazymiu?
// Koks yra vardas studento kuris turi maziausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymi?
// Koks yra vardas studento kuris turi geriausia pazymiu vidurki?
// Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?
// Koks yra vardas studento kuris turi maziausiai pazymiu?
// Koks yra vardas studento kuris turi daugiausiai pazymiu?
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (didejimo tvarka).
// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (mazejimo tvarka).

const students = [
    {
        name: 'Jonas',
        marks: [2],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7],
    },
    {
        name: 'Petras',
        marks: [10, 10],
    },
    {
        name: 'Ona',
        marks: [7, 7, 7, 7, 7],
    },
];

// Koks yra klases pazymiu vidurkis?
// Koks yra klases mokiniu pazymiu vidurkiu vidurkis?

// Klases vidurkis = susumuojame kiekvieno studento vidurki
// 1) 10 -> 10
// 2) 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 -> 1
// (10+1) / 2 = 5.5

// Susumuojame visu mokiniu visus pazymius ir dalinam is viso kiekio
// 1) 10
// 2) 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
// (10+1+1+1+1+1+1+1+1+1+1) / 2 = 20 / 11 = 1.91919191;


// Koks yra klases mokiniu pazymiu vidurkiu vidurkis?
const classAverage = students
    .map(student => student.marks)
    .map(marks => marks.reduce((t, mark) => t + mark, 0) / marks.length)
    .reduce((t, average) => t + average, 0) / students.length;

console.log(classAverage);
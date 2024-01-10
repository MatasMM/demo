// Koks yra klases pazymiu vidurkis?                                    +
// Kokia yra klases pazymiu mediana?                                    +
// Koks yra maziausias pazymys?                                         +
// Koks yra didziausias pazymys?                                        +
// Koks yra skirtumas tarp didziausio ir maziausio pazymiu?             +
// Koks yra vardas studento kuris turi maziausia pazymi?                +
// Koks yra vardas studento kuris turi geriausia pazymi?                +
// Koks yra vardas studento kuris turi geriausia pazymiu vidurki?       +
// Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?     +
// Koks yra vardas studento kuris turi maziausiai pazymiu?              +
// Koks yra vardas studento kuris turi daugiausiai pazymiu?             +
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

const calculateMedian = (marks) => {
    const sortedMarks = marks.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedMarks.length / 2);

    if (sortedMarks.length % 2 === 0) {
        return (sortedMarks[middle - 1] + sortedMarks[middle]) / 2;
    } else {
        return sortedMarks[middle];
    }
};

const medianResults = students.map((student) => ({
    name: student.name,
    median: calculateMedian(student.marks),
}));

console.log(medianResults);

const findSmallestMark = (marks) => {
    return Math.min(...marks);
};

const smallestMarks = students.map((student) => ({
    name: student.name,
    smallestMark: findSmallestMark(student.marks),
}));

console.log(smallestMarks);

const findLargestMark = (marks) => {
    return Math.max(...marks);
};

const largestMarks = students.map((student) => ({
    name: student.name,
    largestMark: findLargestMark(student.marks),
}));

console.log(largestMarks);

const findDifference = (marks) => {
    const smallestMark = Math.min(...marks);
    const largestMark = Math.max(...marks);
    return largestMark - smallestMark;
};

const differenceMarks = students.map((student) => ({
    name: student.name,
    difference: findDifference(student.marks),
}));

console.log(differenceMarks);

const findStudentWithSmallestMark = (students) => {
    let smallestStudent = null;
    let smallestMark = Infinity;

    for (const student of students) {
        const minMark = Math.min(...student.marks);
        if (minMark < smallestMark) {
            smallestMark = minMark;
            smallestStudent = student.name;
        }
    }

    return smallestStudent;
};

const studentWithSmallestMark = findStudentWithSmallestMark(students);

console.log(`The student with the smallest mark is: ${studentWithSmallestMark}`);

const findStudentWithLargestMark = (students) => {
    let largestStudent = null;
    let largestMark = -Infinity;

    for (const student of students) {
        const maxMark = Math.max(...student.marks);
        if (maxMark > largestMark) {
            largestMark = maxMark;
            largestStudent = student.name;
        }
    }

    return largestStudent;
};

const studentWithLargestMark = findStudentWithLargestMark(students);

console.log(`The student with the largest mark is: ${studentWithLargestMark}`);

const calculateAverageMark = (marks) => {
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return sum / marks.length;
};

const findStudentWithBestAverage = (students) => {
    let bestStudent = null;
    let bestAverage = -Infinity;

    for (const student of students) {
        const averageMark = calculateAverageMark(student.marks);
        if (averageMark > bestAverage) {
            bestAverage = averageMark;
            bestStudent = student.name;
        }
    }

    return bestStudent;
};

const studentWithBestAverage = findStudentWithBestAverage(students);

console.log(`The student with the best average mark is: ${studentWithBestAverage}`);

const calculateAverageMark1 = (marks) => {
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return sum / marks.length;
};

const findStudentWithWorstAverage = (students) => {
    let worstStudent = null;
    let worstAverage = Infinity;

    for (const student of students) {
        const averageMark = calculateAverageMark(student.marks);
        if (averageMark < worstAverage) {
            worstAverage = averageMark;
            worstStudent = student.name;
        }
    }

    return worstStudent;
};

const studentWithWorstAverage = findStudentWithWorstAverage(students);

console.log(`The student with the worst average mark is: ${studentWithWorstAverage}`);

const findStudentWithSmallestNumberOfMarks = (students) => {
    let smallestStudent = null;
    let smallestMarksCount = Infinity;

    for (const student of students) {
        const marksCount = student.marks.length;
        if (marksCount < smallestMarksCount) {
            smallestMarksCount = marksCount;
            smallestStudent = student.name;
        }
    }

    return smallestStudent;
};

const studentWithSmallestNumberOfMarks = findStudentWithSmallestNumberOfMarks(students);

console.log(`The student with the smallest number of marks is: ${studentWithSmallestNumberOfMarks}`);

const findStudentWithLargestNumberOfMarks = (students) => {
    let largestStudent = null;
    let largestMarksCount = -Infinity;

    for (const student of students) {
        const marksCount = student.marks.length;
        if (marksCount > largestMarksCount) {
            largestMarksCount = marksCount;
            largestStudent = student.name;
        }
    }

    return largestStudent;
};

const studentWithLargestNumberOfMarks = findStudentWithLargestNumberOfMarks(students);

console.log(`The student with the largest number of marks is: ${studentWithLargestNumberOfMarks}`);

const compareStudents = (a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        const avgA = a.marks.reduce((sum, mark) => sum + mark, 0) / a.marks.length;
        const avgB = b.marks.reduce((sum, mark) => sum + mark, 0) / b.marks.length;

        return avgA - avgB;
    }
};

const sortedStudents = students.slice().sort(compareStudents);

console.log(sortedStudents);

const compareStudentsDescending = (a, b) => {
    if (a.name < b.name) {
        return 1;
    } else if (a.name > b.name) {
        return -1;
    } else {
        const avgA = a.marks.reduce((sum, mark) => sum + mark, 0) / a.marks.length;
        const avgB = b.marks.reduce((sum, mark) => sum + mark, 0) / b.marks.length;

        return avgB - avgA;
    }
};

const sortedStudentsDescending = students.slice().sort(compareStudentsDescending);

console.log(sortedStudentsDescending);
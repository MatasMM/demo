/*
stringas - tekstas

Iciavimo kabutes
- viengubos (;)
- dvigubos (")
backtick (`)
*/

console.log('labas');

const a = 'labas';
console.log(a);

const b = 'labas';
console.log(b);

const c = "labas"
console.log(c);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

//dvyguba (") kabute.
const kabutes2 = 'dvyguba (") kabute.';
console.log(kabutes2);

const name = 'Chuck';
const surname = 'Norris';
const fullname = name + ' ' +  surname;
console.log(fullname);

//Vienguba (') ir dvyguba (") kabutes.
const kabutes3 = "Vienguba (') ir" + ' dvyguba (") kabute.';
console.log(kabutes3);

const kabutes4 = 'Vienguba (\') ir dvyguba (") kabute.';
console.log(kabutes4);

//labas
//rytas,
//Lietuva!

const lrl1 = 'Labas rytas, Lietuva!';
console.log (lrl1)

// \r - return
// \n- new line
// \t - tab

const lrl2 = 'Labas\n\
rytas,\n\
Lietuva!';
console.log (lrl2)

console.log('Kobustas\rtau');
console.log('Kobustas\\rtau');
console.log('Labas\\rytas');
/*
<header>
    <ing src=""</a>
    <nav>
        <a> href=""</a>
        <a> href=""</a>
        <a> href=""</a>
    </nav>
</header>
*/

const html = '<header>\n\
\t<img src="">\n\
\t<nav>\n\
\t\t<a> href=""</a>\n\
\t\t<a> href=""</a>\n\
\t\t<a> href=""</a>\n\
\t</nav>\n\
</header>';

console.log(html);

const username = 'Batman';

// Bruce in not Batman, or is he
const batman = 'Bruce in not ' + username + ', or is he'
console.log (batman);

const c1 = 'red';
const c2 = ' green';
const c3 = 'blue';
const c4 = 'white';
const c5 = 'black';

//My favorite color: 1, 2, 3, 4, 5.
const colors = 'My favorite color:  ' + c1 + ', ' + c2  + ', '+ c3 + ', ' + c4 + ', ' + c5  + '.';
console.log (colors);

const colors2 = `My favorite color: ${c1}, ${c2}, ${c3}, ${c4}, ${c5}.`;
console.log(colors2);

const x = 777;
console.log('${x}');
console.log("${x}");
console.log(`${x}`);

console.clear();
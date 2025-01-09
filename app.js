console.log();

let body = document.querySelector(`body`);
console.log(body);

let h1Tag = document.querySelector(`h1`);
console.log(h1Tag);

let h1 = document.querySelector(`h1`);
h1.textContent = `Hello world!`;

const h2 = document.createElement(`h2`);
h2.textContent = `This is a subheading!`;
body.appendChild(h2);

//confused on this list one
const rose = document.createElement("li");
rose.textContent = `Roses`;
body.appendChild(rose);

const lilac = document.createElement("li");
lilac.textContent = `Lilac`;
body.appendChild(lilac);

const tulips = document.createElement("li");
tulips.textContent = `Tulips`;
body.appendChild(tulips);

const p = document.querySelector(`p`);
p.remove();

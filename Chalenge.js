var name = "Robin Wieruch";

var Name = "Dennis Wieruch";

var NAME = "Thomas Wieruch";

console.log(name);
// "Robin Wieruch"

console.log(Name);
// "Dennis Wieruch"

console.log(NAME);
// "Thomas Wieruch"

// bad
var value = "Robin";

// bad
var val = "Robin";

// good
var firstName = "Robin";

// Challenge 2
let e = "We Love";
let f = "JavaScript";

document.write(e + " " + f);

console.log(e, f);

// Challenge 3
// First Example

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log((a = ' "" ' + b + "\n" + c + " " + d));

console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);

// Challenge 4
let titlee = "Elzero",
  description = "Elzero web school",
  date = "25/10";
let markupp = `
<div class ="card">
  <h3>Hello ${titlee}</h3>
  <P>${description}</p>
  <span>${date}</span>
</div>
`;
document.write(markupp.repeat(4));

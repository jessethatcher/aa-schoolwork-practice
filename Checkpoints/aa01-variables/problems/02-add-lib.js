/*
Use string interpolation to set the `addLib` variable a new wacky string using
the three string variables:
"I shall <verb> to the <adjective> <noun>?"
*/

let verb = "swim";
let adjective = "sparkly";
let noun = "rainbow";

let addLib = `i shall ${verb} to the sparkly rainbow`
console.log("i shall swim to the sparkly rainbow ")


verb = "RUN";
adjective = "FANCY";
noun = "ParK";

addLib = `i shall ${verb} to the FANCY Park`
console.log("i shall RUN to the FANCY Park  ")


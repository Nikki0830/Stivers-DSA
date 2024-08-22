// * * * *
// * * * *
// * * * *
// * * * *

//Rule 1 - first count the outer lines or rows
//Rule 2 - count the Inner lines or columns and try to somehow conncet them with inner loops
//Rule 3 - Whatever you are printing (like here it is "*") , print them inside the inner loop
//optional (break the lines like to the next line)

//Rule 1
let grid = '';  // Initialize an empty string for the grid

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        grid += '* ';  // Add an asterisk followed by a space to the grid string
    }
    grid += '\n';  // Add a newline character at the end of each row
}

console.log(grid);  // Print the entire grid


///////////////////////////////////////////////
let spa = '' //initialize a empty space
for(let i = 0; i < 4; i++){// count the outer loop
    for(let j = 0; j < 4; j++){//count the inner loop and connect them with outer loop
        spa = spa + "1 "// print the values with space and storing all the values in spa variable
    }
    spa = spa + '\n'//add a newline
}
console.log(spa)//print them all together

//Soltuion with trim method


for(let i = 0; i < 4; i++){// for outer rows

    let spa2 = ''//initialize an empty space inside a loop so we can get fresh value every time

   for(let j = 0; j < 4; j++){// for the columns

    spa2 += "8 "// store the values with space so that it will look good
   }
   console.log(spa2.trim())//trim is optional (for removce extra outside spaces from both side)
}

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

//its a combination of both parrent no 7 and 8 question, so just print the q7 then q and, it will show thw exact result.
//just play witrh the patterns sometimes
//just make a two function and call them


let n = 5; // Total number of rows
function patternSeven(){
    for (let i = 0; i < n; i++) { // Outer loop for rows
        let spa = ""; // Initialize an empty string for each row
        
        // First inner loop for leading spaces
        for (let j = 0; j < n - i - 1; j++) { 
            spa += " ";
        }
        
        // Second inner loop for stars with spaces in between
        for (let j = 0; j < 2 * i + 1; j++) { 
            spa += "*";
            // if (j < 2 * i) {
            //     spa += " "; // Add space after each star except the last one in the row
            // }
        }
        
        // Third inner loop for trailing spaces (optional, not needed if you want left-aligned)
        for (let j = 0; j < n - i - 1; j++) { 
            spa += " ";
        }
        
        console.log(spa); // Print the current row
    }
}

function patterEight(){
    for(let i = 0; i < n; i++){
        let spa = ""
        for(let j = 0; j < i; j++){
            spa += " "
        }
        for(let j = 0; j < 2 * n - (2 *i + 1); j++){
            spa  += "*"
        }
        for(let j = 0; j < i; j++){
            spa += " "
        }
        console.log(spa)
    }
}

patternSeven()
patterEight()





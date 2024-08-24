// *********
//  *******
//   *****
//    ***
//     *

//here the start formula is 2 * n - (2 * i + 1) & the space direction goes with the row no so space would be "i"
let n = 5// Tota no of row
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
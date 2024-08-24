//* * * * *
//* * * *
//* * *
//* * 
//*

//Here the observation is we are printing the "*" in the sequence of (Total no of rows - row no + 1 or n - i + 1)
let n = 5//total no of rows
for(let i = 1; i <= n; i++){//for total rows
   let spa = ""// empty space
   for(let j = 1; j <= n - i + 1; j++){//j till goes to this formula which is 
    // j = 1-> 5 stars
    // j = 2-> 4 stars
    // j = 3-> 3 stars
    // j = 4-> 2 stars
    // j = 5-> 1 star
     spa += "* "//storing/printing the values inside inner loop
   }
   console.log(spa)//printing the final value
}
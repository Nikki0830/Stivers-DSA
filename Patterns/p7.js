    //         *
    //       * * *
    //     * * * * *
    //   * * * * * * *
    // * * * * * * * * *

    //her if we observer then we have a pattern like
    //[space, star, space]
    //----*----
    //---***---
    //--*****--
    //-*******-
    //*********

    //so the space count is the reverse direction of the rows 0 - 4 & this is 4 - 0

    //so the formula is 
    //[space,star, space] = [n - i - 1, 2 * i + 1, n - i - 1]
    //0 -> 5 - 0 - 1 = 4, 2 * 0 + 1 = 1, 5 - 0 - 1 = 4

     //1 -> 5 - 1 - 1 = 3, 2 * 1 + 1 = 3, 5 - 1 - 1 = 3

      //2 -> 5 - 2 - 1 = 2, 2 * 2 + 1 = 5, 5 - 2 - 1 = 2

       //3 -> 5 - 3 - 1 = 1, 2 * 3 + 1 = 7, 5 - 3 - 1 = 1

        //4 -> 5 - 4 - 1 = 0, 2 * 4 + 1 = 9, 5 - 4 - 1 = 0

        let n = 5; // Total number of rows
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


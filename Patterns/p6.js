//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1

let n = 5//no of rows

for(let i = 1; i <= n; i++){
    let spa = ""
    for(let j = 1; j <= n - i + 1; j++){
        spa += j + " "
    }
    console.log(spa)
}
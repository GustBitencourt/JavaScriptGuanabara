function fatorial(num) {
    let fat = 1;
    for(i = num; i > 1; i--) {
        fat *= i;
    }
    return fat;
}

console.log(fatorial(5));
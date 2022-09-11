function sumFirstAndLast(arr) {

    arr = arr.map(Number);
    let first = arr.shift();
    let last = arr.pop();
    let sumFirstAndLast = first + last;
    
    /*
    let first = arr[0];
    let last = arr[arr.length-1];
    */

    console.log(sumFirstAndLast);
}
sumFirstAndLast(['20', '30', '40'])
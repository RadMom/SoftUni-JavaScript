function sequences(arr) {

myArrays=[];
for(let el of arr){
    let elAsArr=JSON.parse(el);
    myArrays.push(elAsArr);
}
console.log(myArrays);
}
sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
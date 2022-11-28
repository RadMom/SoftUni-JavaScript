function oddOccurrences(arr) {
    
    let myArr = arr.split(` `)
    let list = {}
    for (let i = 0; i < myArr.length; i++) {

        let currWord = myArr[i].toLowerCase();
        if (list.hasOwnProperty(currWord)) {
            list[currWord] += 1
        } else {
            list[myArr[i].toLowerCase()] = 1;
        }
    }

    let myList = [];
    for (let el in list) {
        if (list[el] % 2 != 0) {
            myList.push(el)
        }
    }
    console.log(myList.join(` `));
}
oddOccurrences('Java C# Php PHP Java -22 PhP 3 C# 3 1 5 C# 333 0')
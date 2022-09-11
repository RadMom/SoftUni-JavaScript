function arrayManupulations(comands) {

    let arr = comands.shift().split(` `).map(Number);

    for (let i = 0; i < comands.length; i++) {

        let [comand, num1, num2] = comands[i].split(` `);
        num1 = Number(num1);
        num2 = Number(num2);

        switch (comand) {
            case "Add": add(num1); break;
            case "Remove": remove(num1); break;
            case "RemoveAt": removeAt(num1); break;
            case "Insert": insert(num1, num2); break
        }
    }
    console.log(arr.join(` `));

    function insert(num, index) {
        arr.splice(index, 0, num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function remove(num) {
        arr = arr.filter(el => el !== num);
    }

    function add(el) {
        arr.push(el);
    }
}
arrayManupulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
function buildaWall(arr) {

    let concretePerDay = [];
    let totaConcrete = 0;

    arr.sort((a, b) => {
        return b - a;
    })
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] < 30) {
            concretePerDay.push((arr.length - i) * 195);
            for (let j = i; j < arr.length; j++) {
                arr[j] = arr[j] + 1;
            }
        }
    }
    concretePerDay.forEach(element => {
        totaConcrete += element;
    });
    
    console.log(concretePerDay.join(`, `));
    console.log(`${totaConcrete * 1900} pesos`);

}
buildaWall([21, 25, 28]);
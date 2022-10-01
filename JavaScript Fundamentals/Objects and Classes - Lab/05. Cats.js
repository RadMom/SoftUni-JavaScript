function cats(arr) {

    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of arr) {
        let catinfo = cat.split(` `);
        let name = catinfo[0];
        let age = catinfo[1];
        cats.push(new Cat(name, age))
    }

    for (let myCat of cats) {
        myCat.meow();
    }

}
cats(['Mellow 2', 'Tom 5']);
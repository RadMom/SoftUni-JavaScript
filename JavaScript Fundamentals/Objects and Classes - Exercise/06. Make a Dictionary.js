function makeAdictionary(arr) {

    let dictionary = {};

    for (let el of arr) {
        let obj = JSON.parse(el);
        dictionary = Object.assign(dictionary, obj);
    }

    let sorted = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    for (let term of sorted) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
    console.log(dictionary);

}
makeAdictionary(
    ['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}'])
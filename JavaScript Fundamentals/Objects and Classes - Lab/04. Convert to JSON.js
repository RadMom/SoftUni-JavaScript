function covertToJSON(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}
covertToJSON('George', 'Jones', 'Brown')
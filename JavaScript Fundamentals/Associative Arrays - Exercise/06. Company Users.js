function companyUsers(arr) {

    let final = new Map();

    for (let el of arr) {
        let info = el.split(` -> `);
        let companyName = info[0];
        let employeeId = info[1];

        if (!final.has(companyName)) {
            final.set(companyName, new Set());
        }
        final.get(companyName).add(employeeId);
    }

    let sorted = Array.from(final).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    })

    for (let [key, value] of sorted) {
        console.log(key);
        for (let id of value) {
            console.log(`-- ${id}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
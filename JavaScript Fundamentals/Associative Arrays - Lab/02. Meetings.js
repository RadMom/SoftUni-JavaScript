function meetings(arr) {

    let meetingsList = {};

    for (let el of arr) {
        let [day, name] = el.split(` `);
        if (meetingsList.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsList[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let el in meetingsList) {
        console.log(`${el} -> ${meetingsList[el]}`);
    }
    
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
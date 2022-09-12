function loadingBar(number) {

    let completed = `%`.repeat(number / 10);
    let incompleted = `.`.repeat(10 - number / 10);

    if (number === 100) {
        console.log(`100% complete!`);
        console.log(`[${completed}]`);
    } else {
        console.log(`${number}% [${completed}${incompleted}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(100);
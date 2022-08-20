function pyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let counter = 0;
    for (let step = base; step > 0; step -= 2) {
        counter++;
        if (step === 1 || step === 2) {
            gold += step * step;
            break;
        }
        if (counter % 5 === 0) {
            lapis += step * 4 - 4;
            stone += step * step - (step * 4 - 4);
        } else {
            marble += step * 4 - 4;
            stone += step * step - (step * 4 - 4);
        }
    }
    let totalStone = stone * increment;
    let totalMarble = marble * increment;
    let totalLapis = lapis * increment;
    let totalGold = gold * increment;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
}
pyramidOfKingDjoser(11, 0.75);
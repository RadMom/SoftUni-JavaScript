function manOWar(arr) {

   let pirateShip = arr.shift().split(`>`).map(Number);
   let warShip = arr.shift().split(`>`).map(Number);
   let maxHealthSection = Number(arr.shift());

   let index = 0;
   let command = arr[index];

   while (command != `Retire`) {

      let commandS = command.split(` `);
      let currCommand = commandS.shift();
      commandS = commandS.map(Number);


      switch (currCommand) {
         case `Fire`:
            if (warShip[commandS[0]] !== undefined) {
               warShip[commandS[0]] -= commandS[1];
               if (warShip[commandS[0]] <= 0) {
                  console.log("You won! The enemy ship has sunken.");
                  return;
               }
            }
            break;
         case `Defend`:
            if (pirateShip[commandS[0]] !== undefined && pirateShip[commandS[1]] !== undefined) {
               for (let i = commandS[0]; i <= commandS[1]; i++) {
                  pirateShip[i] -= commandS[2];
                  if (pirateShip[i] <= 0) {
                     console.log("You lost! The pirate ship has sunken.");
                     return;
                  }
               }
            }
            break;
         case `Repair`:
            if (pirateShip[commandS[0]] !== undefined) {
               pirateShip[commandS[0]] += commandS[1];
               if (pirateShip[commandS[0]] > maxHealthSection) {
                  pirateShip[commandS[0]] = maxHealthSection;
               }
            }
            break;
         case `Status`:
            let count = 0;
            for (let section of pirateShip) {
               if (section < maxHealthSection / 5) {
                  count++;
               }
            }
            console.log(`${count} sections need repair.`);
            break;
      }

      index++;
      command = arr[index];
   }

   console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
   console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);
}
manOWar(["12>13>11>20>66",
   "12>22>33>44>55>32>18",
   "70",
   "Fire 2 11",
   "Fire 8 100",
   "Defend 3 6 11",
   "Defend 0 3 5",
   "Repair 1 33",
   "Status",
   "Retire"]);
function adAstra(input){

      let pattern = /([|#])(?<food>[A-Za-z\s]+)\1(?<date>\d{2}[\/]\d{2}[\/]\d{2})\1(?<calories>\d{1,5})\1/g;
   
      let astra = input;
      let totalCalories = 0;
      let day = 0;
      let arr = [];
      let current = pattern.exec(astra);
   
    
      while (current) {
      
         let  food = current.groups.food;
          let  date = current.groups.date;
          let  calore = current.groups.calories;
          arr.push({food,date,calore})
  
          totalCalories += Number(calore);
         
          current = pattern.exec(astra);
        
        }
        day = totalCalories / 2000;
        console.log(`You have food to last you for: ${Math.floor(day)} days!`);
    
        for (const line of arr) {
      console.log(`Item: ${line.food}, Best before: ${line.date}, Nutrition: ${line.calore}`);
      
     }
  
  }
adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');
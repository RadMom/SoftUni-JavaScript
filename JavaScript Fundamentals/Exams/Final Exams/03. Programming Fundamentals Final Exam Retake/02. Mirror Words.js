function mirrorWords(input) {
    
let regExOne=/([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gm;
let matches=regExOne.exec(input);

while(matches){
    
    console.log(matches);
    matches=regExOne.exec(input);
}

}
mirrorWords(
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
);
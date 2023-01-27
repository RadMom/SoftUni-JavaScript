function hardWord(sentence,words) {

    let regEx = /[_]+/;
    let valid;

    while((valid=regEx.exec(sentence))!==null){
    
        for(let word of words){
            if(valid.length==word.length){
                sentence.match(regEx).replace(word);
            }
        }
    }

    
}
hardWord([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a__________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.'],

    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']);
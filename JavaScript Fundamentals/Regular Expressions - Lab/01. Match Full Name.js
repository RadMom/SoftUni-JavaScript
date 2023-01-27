function matchFullName(input){

let pattern=/\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}\b/gm;
let validNames=[];
let validName;
while(( validName=pattern.exec(input))!==null){
    validNames.push(validName[0]);
}

console.log(validNames.join(` `));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
function extractFile(input) {

    let fileInfoAsArr = input.split(`\\`);
    let myInfo = fileInfoAsArr.pop();
    let myFile = myInfo.split(`.`);
    let fileExtension = myFile.pop();
    let fileName = myFile.join(`.`)


    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
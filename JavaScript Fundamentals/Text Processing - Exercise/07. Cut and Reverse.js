function cutAndReverse(input) {

    let firstHalf = input.slice(0, input.length / 2).split("").reverse().join("")
    let secondHalf = input.slice(input.length / 2, input.length).split("").reverse().join("");

    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
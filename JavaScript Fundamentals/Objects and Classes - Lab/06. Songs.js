function songs(arr) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];

    let numberOfSongs = arr.shift(arr);
    let typeInput = arr.pop(arr);

    for (let el of arr) {
        let songInfo = el.split(`_`);
        let typeList = songInfo[0];
        let name = songInfo[1];
        let time = songInfo[2];
        songs.push(new Song(typeList, name, time));
    }
    if (typeInput === `all`) {
        for (let el of songs) {
            console.log(el.name);
        }
    } else {
        for (let el of songs) {
            if (typeInput == el.typeList) {
                console.log(el.name);
            }
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
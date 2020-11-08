function data() {
    fetch('https://spotify.walalo.xyz/api/playing-json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var song = document.getElementById("Song");
            var author = document.getElementById("author");
            if (data.isPlaying === false || !data) {
                song.innerText = "The Bay" 
                author.innerText = "Metronomy"
            } else {
                song.innerText = data.track 
                author.innerText = data.artist
            }
            
        })
        .catch(function (err) {
            console.log(err);
        });
}

setInterval(() => {
    data()
}, 5000);
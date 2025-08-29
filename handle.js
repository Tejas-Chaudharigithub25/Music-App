const songData = [
    {
        'id':1,'name': 'music-1','poster':'Posters/p2.jpg','path':'songs/music.mp3'
    },
    {
        'id':2,'name': 'music-2','poster':'Posters/p2.jpg','path':'songs/music2.mp3'
    }
];
var song = new Audio('songs/music.mp3');
function handleSong(event){
    let findData = songData.filter(item=>{
        return event == item.id;
    });
    song.src = findData[0].path;
    song.play();
}
function handlePlay(event) {
    let progress = document.getElementById('progress');
    // let songListBtn = document.getElementById('progress');
    if (event.classList.contains('fa-play')|| progress.value<=0) {
        event.classList.replace('fa-play', 'fa-pause');
        song.play();
    } else {
        event.classList.replace('fa-pause', 'fa-play');
        song.pause();
    }
}
function handleProgress(event){
    let progress = document.getElementById('progress');
    song.duration = progress.max;
    song.currentTime = progress.value;
}
song.ontimeupdate = function(){
    let progress = document.getElementById('progress');
    progress.max = song.duration;
    progress.value = song.currentTime;
}
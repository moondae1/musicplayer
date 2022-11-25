// function setup()
// {
//     createCanvas(400, 400);
//     line(-50, 120, 40, -60);
// line(40, -60, 10, 200);

// }


let song;
let button;
function setup()
{
    createCanvas(640, 480);
    soundFormats('mp3','ogg');
    song = loadSound('music', loadMusic);
    // musicFile.play();
    button = createButton("play");
    button.mousePressed(togglePlaying);
}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        button.html('pouse');
    }else{
        song.stop();
        button.html('play');
    }
}

function loaded(){
    console.log("It's working");
}

function draw(){
    fill(255,0.0);
    ellipse(50,50,100,100);
}




// function loadMusic()
// {
//     song.play();
// }


// function draw(){
//     fill(255,0.0);
//     ellipse(50,50,100,100);
// }

// var song;
// var button;

// function setup(){
//     createCanvas(200, 200);
//     song = loadSound('music.mp3', loaded);
//     button = createButton('play');
//     button.mousePressed(togglePlaying);
//     background(51);
// }

// function togglePlaying(){
//     if(!song.isPlaying()){
//         song.play();
//         song.setVolume(0.3);
//         button.html('play');
//     }
// }

// function loaded(){
//     console.log('loaded');
// }

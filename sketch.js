// function setup()
// {
//     createCanvas(400, 400);
//     line(-50, 120, 40, -60);
// line(40, -60, 10, 200);

// }


let musicFile;
function setup()
{
    soundFormats('mp3','ogg');
    musicFile = loadSound('music',loaadMusic);
    // musicFile.play();

}


function loadMusic()
{
    musicFile.play();
}

function draw(){

    fill(255.0.0);
    ellipse(50,50,100,100);


}
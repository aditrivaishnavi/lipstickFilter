lipX = 0;
lipY = 0;

function preload() {
    lips = loadImage('https://i.postimg.cc/zvKLydxy/lip.png');
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 500, 500);
    image(lips, lipX, lipY, 60, 40);
}
function take_snapshot() {
    save('lipstickFilter.png');
}
function modelLoaded() {
    console.log('Model is loaded!');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        lipX = results[0].pose.nose.x - 100;
        lipY = results[0].pose.nose.y + 50;
        console.log("lip x = " + lipX);
        console.log("lip y = " + lipY);
    }
}
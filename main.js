function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(300, 300);
    camera.hide();
    posenet = ml5.poseNet(camera, modelLoaded);
    posenet.on('pose', gotResult);
}

function draw() {
    image(camera, 0, 0, 300, 300);
}

function images() {
    save("filter.jpg");
}

function modelLoaded() {
    console.log("posenet is iniciated");
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x =" + nose_x);
        console.log("nose y =" + nose_y);
    }
}

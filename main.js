nosex =0;
nosey=0;
leftwristx=0;
rightwristx=0;
diffrence=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(760,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
     }

function draw(){
    background('#717d68');
    document.getElementById("square_side").innerHTML="WIDTH AND HEIGHT OF THE SQUARE WILL BE "+diffrence+" px";
    
    fill('#e6f205');
    stroke('#ff0000');
    square(nosex,nosey,diffrence);
}

function modelLoaded(){
    console.log('POSENET IS INITIALIZED');

}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log('nosex= '+nosex +'nosey= '+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        diffrence=floor(leftwristx-rightwristx);
        console.log("leftwristx= "+leftwristx+" rightwristx= "+rightwristx+" diffrence="+diffrence);


    }
}
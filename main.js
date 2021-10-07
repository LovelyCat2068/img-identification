Webcam.set({width: 300, height: 300, image_format: 'jpeg', jpeg_quality: 91, constraints:{facingMode: "environment"}});
camera = document.getElementById("camera");
Webcam.attach('#camera');


function take_screenshot(){
Webcam.snap(function(data_uri){document.getElementById("result").innerHTML= "<img id='iimg' src='"+data_uri+"'/>"});
}

console.log("Ml5",ml5.version);

classifier=ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function check(){
    img=document.getElementById("iimg");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    if(results){
        console.log(results);
        document.getElementById("output").innerHTML=results[0].label;
    }
}
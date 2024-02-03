function setup(){
    canvas=createCanvas(300, 300)
    canvas.center()
    video=createcapture(VIDEO)
    video.hide()
    }
    function draw(){
    image(video,0,0, 300, 300)
    }
    function modelLoaded(){
        console.log("¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡modelo CARGADO omg omg oooooooomg !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }
    var previousresult ="" ;
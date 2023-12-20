function setup(){

    canvas = createCanvas(500, 500)
    canvas.position(520, 200)

    video = createCapture(VIDEO)
    video.hide()
}

function draw(){

    image(video,125, 125, 250, 250)

    fill("yellow")
    noStroke()

    rect(40, 50, 20, 400)
    rect(40, 40, 400, 20)
    rect(440, 50, 20, 400)
    rect(40, 440, 400, 20)

    fill("red")

    circle(50, 50, 40)
    circle(50, 450, 40)
    circle(450, 50, 40)
    circle(450, 450, 40)

}
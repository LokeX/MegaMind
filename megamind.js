function getCanvasContext () {

    var canvas = document.querySelector("canvas");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    return canvas.getContext("2d");
}

class Board {

    constructor (x,y,w,h) {
        
        //Frame bounds
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        //Playboard
        this.bx = x+10
        this.by = y+10;
        this.bw = w-100;
        this.bh = h-20;
    }

    draw() {

        c.fillStyle = "#FFFFFF";
        c.fillRect(this.x, this.y, this.w, this.h);
        c.fillStyle = "#000000";
        c.fillRect(this.bx, this.by, this.bw, this.bh);
    }
}

function draw () {

    board.draw();
    requestAnimationFrame(draw);
}

var c = getCanvasContext();
var board = new Board(10,10,500,650);

draw();

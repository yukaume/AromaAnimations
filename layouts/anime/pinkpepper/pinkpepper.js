'use strict';

var pinkpepperNum;
var pinkpepperArr = [];

function setup() {
    pixelDensity(displayDensity());
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(321, 10, 100);
    pinkpepperNum = 300;
    for (var i = 0; i < pinkpepperNum; i++) {
        pinkpepperArr.push(new Particles());
    }
}

function draw() {
    background(321, 10, 100);
    for (var i = 0; i < pinkpepperArr.length; i++) {
        pinkpepperArr[i].update();
        pinkpepperArr[i].render();
    }
    cursor(HAND)
}

function Particles() {
    var mass = 0;
    var px = random(0, windowWidth);
    var py = random(0, windowHeight);
    var vx = random(-50, 50);
    var vy = random(-50, 50);
    var ax = 0;
    var ay = 0;
    var sc = 1;
    var distance = 0;

    this.update = function () {
        mass = random(1, 100.0);
        ax = -1 * vx * 0.4;
        ay = -1 * vy * 0.4;
        ax += (mouseX - px) * 0.2;
        ay += (mouseY - py) * 0.2;
        distance = dist(mouseX, mouseY, px, py);
        if (distance < 10) {
            sc = 4;
        } else {
            sc = 1 / (distance / 400);
        }
        vx += ax / mass * 1;
        vy += ay / mass * 1;
        px += vx;
        py += vy;
    }
    this.render = function () {
        stroke(330, 60, 50);
        strokeWeight(1);
        fill(random(305, 345), random(40, 55), random(100, 75));
        ellipseMode(CENTER);
        ellipse(px, py, 4 * sc, 4 * sc);
    }
}
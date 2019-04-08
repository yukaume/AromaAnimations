'use strict';

const data = []
const c = 0.01
let frameCount = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    background(45, 15, 100);
}

function draw() {
    background(45, 15, 100);
    frameCount += 1;
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            data[i].life += 0.7
            if (data[i].life < data[i].life_limit) {

                data[i].acc += data[i].vel * -1 * data[i].mass * c
                data[i].vel += data[i].acc
                data[i].r += data[i].vel + random(0.01, 1)
                fill(random(48, 58), random(90, 100), 0 + data[i].life * 100 / data[i].life_limit, 102)
                drawCicle(data[i].x, data[i].y, data[i].r, data[i].length)
                data[i].acc = 0
            } else {
                data.splice(i, 1)
            }
        }
    }

    if (frameCount % 10 === 0) {
        data.push({
            x: random(0, windowWidth),
            y: random(0, windowHeight),
            r: 30,
            vel: 0,
            acc: 10,
            mass: random(-2, 3),
            life_limit: 30,
            life: 0,
            length: 15
        })
    }
}

function createCircle(x, y) {
    // noStroke();
    stroke(50, 90, 65)
    fill(random(48, 58), random(90, 100), random(95, 100), 120);
    rectMode(CENTER)
    rect(x, y, random(16, 72), random(16, 72))
}

function drawCicle(x, y, r, length) {
    const angle = 360 / length
    for (let i = 0; i < length; i++) {
        const _angle = angle * i
        const _x = cos(_angle * PI / 180) * r + x
        const _y = sin(_angle * PI / 180) * r + y
        createCircle(_x, _y)
    }
}

function mouseClicked() {
    data.push({
        x: mouseX,
        y: mouseY,
        r: 30,
        vel: 0,
        acc: 10,
        mass: random(-2, 5),
        life_limit: 30,
        life: 0,
        length: 15
    })
}
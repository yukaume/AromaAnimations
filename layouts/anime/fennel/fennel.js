// const fennel = document.querySelector('#fennel');
// fennel.insertAdjacentHTML('afterbegin', htmlCreater('items', 40));
// fennel.insertAdjacentHTML('afterbegin', htmlCreater('items1', 50));
// const items = document.querySelector('.items');
// const items1 = document.querySelector('.items1');
// const wrapperWidth = fennel.clientWidth;
// const wrapperHeight = fennel.clientHeight;
// const itemsWidth = items.clientWidth;
// const itemsHeight = items.clientHeight;
// var countW = (wrapperWidth - itemsWidth * 4) / 3;
// var countH = wrapperHeight - itemsHeight;

// function htmlCreater(className, number) {
//     let html = '';
//     for (let i = 0; i < number; i++) {
//         html += `<div class ="${className}"></div>`;
//     }
//     return html;
// }
// var tl = anime.timeline({
//     targets: '.items,.items1',
//     easing: 'easeOutSine',
//     loop: true
// });
// tl.add({
//             targets: '.items,.items1',
//             duration: 10,
//             easing: 'linear',
//             translateX: [
//                 wrapperWidth / 2 - itemsWidth / 2,
//                 wrapperWidth / 2 - itemsWidth / 2
//             ],
//             translateY: [
//                 wrapperHeight / 2 - itemsHeight / 2,
//                 wrapperHeight / 2 - itemsHeight / 2
//             ]
//         },
//         0
//     )
//     .add({
//         targets: '.items,.items1',
//         duration: 600,
//         easing: 'easeInSine',
//         endDelay: 200,
//         translateY: function () {
//             return anime.random(0, wrapperHeight);
//         },
//         opacity: 0.9
//     })
//     .add({
//         targets: '.items,.items1',
//         duration: 1500,
//         delay: anime.stagger(4),
//         easing: 'easeOutSine',
//         translateX: function () {
//             return anime.random(0, wrapperWidth);
//         },
//         skew: [0, -30, 30, -30, 30, -30, 30, -20, 20, -20, 20, -20, 10, -10, 0],
//         opacity: 0.9
//     })
//     .add({
//         targets: '.items,.items1',
//         duration: 1500,
//         easing: 'easeOutCirc',
//         skew: [0, -30, 30, -30, 30, -30, 30, -20, 20, -20, 20, -20, 10, -10, 0],
//         scale: function () {
//             return anime.random(0.5, 5)
//         },
//     })
//     .add({
//         targets: '.items,.items1',
//         duration: 1000,
//         easing: 'easeInCirc',
//         scale: [0, 5, 1, 6, 1, 5, 1, 5, 1, 5, 5, 1, 6, 1, 5],

//     })
//     .add({
//         targets: '.items,.items1',
//         duration: 500,
//         easing: 'easeInCirc',
//         opacity: 0
//     });

class Mover {
    constructor(props) {
        this.location = props.location
        this.velocity = props.velocity
        this.direction = 0.04
        this.topSpeed = 2
    }

    update() {
        this.acceleration = this.getMouseDir()
        this.acceleration.mult(random(-1, 1.5))
        this.acceleration.mult(this.direction)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.topSpeed)
        this.location.add(this.velocity)
    }

    display() {
        stroke(135, 3, 100)
        strokeWeight(3)
        fill(random(120, 135), random(60, 75), random(80, 95), 120)
        rect(this.location.x, this.location.y, random(12, 32), windowHeight)
    }

    checkEdges() {
        if (this.location.x > width) {
            this.location.x = 0
        } else if (this.location.x < 0) {
            this.location.x = width
        }

        if (this.location.y > height) {
            this.location.y = 0
        } else if (this.location.y < 0) {
            this.location.y = height
        }
    }
    getMouseDir() {
        return p5.Vector.sub(createVector(random(windowWidth / 1.5, windowWidth / 3), random(0, windowHeight / 2)), this.location).normalize()
    }
}

var movers = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    colorMode(HSB)
    for (let i = 0; i < 20; i++) {
        movers.push(new Mover({
            location: createVector(random(0, windowWidth), windowHeight),
            velocity: createVector(0, 0),
            acceleration: createVector(-0.01, 0.02)
        }))
    }
}


function draw() {
    background('#E3FFEA')
    for (let i = 0; i < movers.length; i++) {
        movers[i].update()
        movers[i].checkEdges()
        movers[i].display()
    }
}
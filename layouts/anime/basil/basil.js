'use strict';
// const basil = document.querySelector('#basil');
// basil.insertAdjacentHTML('afterbegin', htmlCreater('items', 10));
// basil.insertAdjacentHTML('afterbegin', htmlCreater('items1', 10));
// const items = document.querySelector('.items');
// const items1 = document.querySelector('.items1');
// const wrapperWidth = basil.clientWidth;
// const wrapperHeight = basil.clientHeight;
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
//     loop: true,
//     background: 'linear-gradient(to top left,#CCFFCC,#99FF99,#00E600,#B3FFDF,#00D97E)',
// });
// tl.add({
//             targets: '.items,.items1',
//             duration: 0,
//             translateX: function () {
//                 return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
//             },
//             translateY: anime.stagger([itemsWidth * 2, wrapperHeight - itemsWidth * 2]),
//             opacity: [0.9, 0.9],
//             scale: 1,
//             rotateZ: anime.stagger([20, 300]),

//         },
//         0
//     )
//     .add({
//         targets: '.items,.items1',
//         easing: 'easeOutQuad',
//         translateX: function () {
//             return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
//         },
//         translateY: anime.stagger([itemsWidth * 2, wrapperHeight - itemsWidth * 2]),
//         duration: 1200,
//         borderRadius: '50%',
//         scaleX: [2.5, -2.5],
//         scaleY: [-3.5, 3.5]
//     })

//     .add({
//         targets: '.items,.items1',
//         easing: 'easeInSine',
//         duration: 2000,
//         scale: [2, 0.5, 2],
//         rotateZ: anime.stagger([30, 180])
//     })
//     .add({
//         targets: '.items,.items1',
//         translateX: function () {
//             return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 4);
//         },
//         translateY: anime.stagger([itemsWidth * 2, wrapperHeight - itemsWidth * 4]),
//         easing: 'easeInSine',
//         duration: 800,
//         scale: 2,
//         opacity: 0
//     });




class Mover {
    constructor(props) {
        this.location = props.location
        this.velocity = props.velocity
        this.direction = 1
        this.topSpeed = 10
    }

    update() {
        this.acceleration = this.getMouseDir()
        this.acceleration.mult(random(-1, 1.2))
        this.acceleration.mult(this.direction)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.topSpeed)
        this.location.add(this.velocity)
    }

    display() {
        stroke(100, 100, 100)
        fill(random(90, 120), random(60, 90), random(70, 95), 120)
        ellipse(this.location.x, this.location.y, 24, 32)
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
        return p5.Vector.sub(createVector(mouseX, mouseY), this.location).normalize()
    }


}

var movers = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    colorMode(HSB)
    for (let i = 0; i < 200; i++) {
        movers.push(new Mover({
            location: createVector(random(0, windowWidth), random(0, windowHeight)),
            velocity: createVector(0, 0),
            acceleration: createVector(-0.01, 0.03)
        }))
    }
}


function draw() {
    background('#E9F2E9')
    for (let i = 0; i < movers.length; i++) {
        movers[i].update()
        movers[i].checkEdges()
        movers[i].display()
    }
}
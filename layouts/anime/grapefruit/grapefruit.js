// const grapefruit = document.querySelector('#grapefruit');
// grapefruit.insertAdjacentHTML('afterbegin', htmlCreater('grapefruitItem', 30));
// const grapefruitItem = document.querySelector('.grapefruitItem');
// const wrapperWidth = grapefruit.clientWidth;
// const wrapperHeight = grapefruit.clientHeight;
// const itemsWidth = grapefruitItem.clientWidth;
// const itemsHeight = grapefruitItem.clientHeight;
// var countW = (wrapperWidth - itemsWidth * 4) / 3;
// var countH = wrapperHeight - itemsHeight;

// function htmlCreater(className, number) {
//     let html = '';
//     for (let i = 0; i < number; i++) {
//         html += `<div class ="${className}"></div>`;
//     }
//     return html;
// }
// const itemsBorder = '15px';
// anime
//     .timeline({
//         targets: '.grapefruitItem',
//         loop: true
//     })
//     .add({
//         targets: '.grapefruitItem',
//         duration: 0,
//         background: 'linear-gradient(#FFF419,#FFFC9C,#FFFDD9,#F7FF9C,#FFFF5C)',
//         opacity: [0.7, 0.7],
//         translateX: [
//             wrapperWidth / 2 - itemsWidth / 2,
//             wrapperWidth / 2 - itemsWidth / 2
//         ],
//         translateY: [
//             wrapperHeight / 2 - itemsHeight / 2,
//             wrapperHeight / 2 - itemsHeight / 2
//         ],
//         scale: 15
//     })
//     .add({
//         targets: '.grapefruitItem',
//         duration: 800,
//         easing: 'easeOutCubic',
//         scale: 0.5
//     })
//     .add({
//         targets: '.grapefruitItem',
//         duration: 800,
//         easing: 'easeOutExpo',
//         translateX: function () {
//             return anime.random(itemsWidth, wrapperWidth - itemsWidth);
//         },
//         translateY: function () {
//             return anime.random(itemsHeight * 4, wrapperHeight - itemsHeight * 4);
//         },
//         rotateZ: anime.stagger(10),
//         scale: 8
//     })
//     .add({
//             targets: '.grapefruitItem',
//             duration: 800,
//             easing: 'easeOutQuint',
//             rotateZ: 1080,
//             scale: 8,
//             skew: {
//                 value: 50,
//                 delay: 600
//             }
//         },
//         '-=200'
//     )
//     .add({
//         targets: '.grapefruitItem',
//         duration: 800,
//         easing: 'easeOutQuint',
//         skew: -50,
//         scale: 1
//     })
//     .add({
//         targets: '.grapefruitItem',
//         duration: 1200,
//         easing: 'easeOutQuint',
//         skew: 90,
//         scale: 13
//     })
//     .add({
//         targets: '.grapefruitItem',
//         duration: 400,
//         easing: 'easeOutQuint',
//         skew: 90,
//         scale: 13,
//         rotateZ: 1080,
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
        this.acceleration.mult(random(-0.01, 0.5))
        this.acceleration.mult(this.direction)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.topSpeed)
        this.location.add(this.velocity)
    }

    display(num) {

        stroke(40, 60, 100)
        strokeWeight(random(0, 2))
        fill(random(20, 50), random(40, 60), random(95, 100))
        rect(this.location.x, this.location.y, num, num)

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
// var width = window.innerWidth
// var height = window.innerHeight

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    colorMode(HSB);

    for (let i = 0; i < 1000; i++) {
        movers.push(new Mover({
            location: createVector(random(0, width), random(0, height)),
            velocity: createVector(0, 0),
            acceleration: createVector(-0.001, 0.001)
        }))
    }
}


function draw() {
    background('#FFFCF0')
    for (let i = 0; i < movers.length; i++) {
        const posx = movers[i].location.x
        const posy = movers[i].location.y
        movers[i].update()
        movers[i].checkEdges()
        movers[i].display(8 + frameCount / 50)
    }
}

function mouseClicked() {
    console.log('click')
    movers.forEach(el => el.direction *= -1)
}
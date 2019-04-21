// const jasmine = document.querySelector('#jasmine');
// jasmine.insertAdjacentHTML('afterbegin', htmlCreater('items', 60));
// jasmine.insertAdjacentHTML('afterbegin', htmlCreater('items1', 60));
// const items = document.querySelector('.items');
// const items1 = document.querySelector('.items1');
// const items2 = document.querySelector('.items2');
// const items3 = document.querySelector('.items3');
// const wrapperWidth = jasmine.clientWidth;
// const wrapperHeight = jasmine.clientHeight;
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
//     easing: 'easeInSine',
//     loop: true,
//     background: 'linear-gradient(to top left,#FFB366,#FFF5D9,#FFD659)'
// });
// tl.add({
//         targets: '.items,.items1',
//         duration: 300,
//         translateX: [
//             wrapperWidth / 2 - itemsWidth / 2,
//             wrapperWidth / 2 - itemsWidth / 2
//         ],
//         translateY: [
//             wrapperHeight / 2 - itemsHeight / 2,
//             wrapperHeight / 2 - itemsHeight / 2
//         ],
//         opacity: [0, 0.9]
//     })
//     .add({
//         targets: '.items,.items1',
//         easing: 'easeOutQuad',
//         duration: 1500,
//         translateX: function () {
//             return anime.random(itemsWidth, wrapperWidth - itemsWidth);
//         },
//         translateY: function () {
//             return anime.random(itemsHeight * 2, wrapperHeight - itemsHeight * 2);
//         },
//         rotateX: function () {
//             return anime.random(0, 540);
//         },
//         rotateY: function () {
//             return anime.random(0, 360);
//         },
//         opacity: 0.9,
//         borderRadius: ['50%', '30%', '50%']
//     })
//     .add({
//         targets: '.items,.items1',
//         duration: 1500,
//         easing: 'easeOutQuad',
//         rotateX: function () {
//             return anime.random(-540, 540);
//         },
//         rotateY: function () {
//             return anime.random(-540, 540);
//         },
//         scale: function () {
//             return anime.random(0.5, 4);
//         },
//         borderRadius: ['50%', '20%', '50%']
//     })
//     .add({
//         targets: '.items,.items1',
//         duration: 1500,
//         easing: 'easeInQuad',
//         rotateX: function () {
//             return anime.random(540, -540);
//         },
//         rotateY: function () {
//             return anime.random(360, -540);
//         },
//         borderRadius: ['50%', '40%', '50%']
//     })
//     .add({
//         targets: '.items,.items1',
//         easing: 'easeOutQuad',
//         duration: 800,
//         rotateX: function () {
//             return anime.random(540, -540);
//         },
//         rotateY: function () {
//             return anime.random(360, -540);
//         },
//         scale: [5, 0]
//     });


const data = []
let frameCount = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    background('#FCFFF7');
}

function draw() {

    background('#FCFFF7');
    frameCount += 1;

    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            data[i].life += 0.6
            if (data[i].life < data[i].life_limit) {
                data[i].r += 0.01
                data[i].w -= 0.03
                data[i].h -= 0.025
                drawCicle1(data[i].x, data[i].y, data[i].w, data[i].h, data[i].r, data[i].length)
                data[i].acc = 0
            } else {
                data.splice(i, 1)
            }
        }
    }

    if (frameCount % 9 === 0) {
        data.push({
            x: random(0, windowWidth),
            y: random(windowHeight / 6, windowHeight / 1.2),
            r: 5,
            vel: 0,
            acc: 1,
            life_limit: 350,
            life: 0,
            length: 4,
            w: 26,
            h: 26
        })
    }
}

function createCircle1(x, y, w, h) {
    stroke(55, 85, 100)
    strokeWeight(2.5)
    fill(50, random(0, 20), 100, 120);
    rectMode(CENTER)
    ellipse(x, y, w, h)
}

function drawCicle1(x, y, w, h, r, length) {
    const angle = 360 / length
    for (let i = 0; i < length; i++) {
        const _angle = angle * i
        const _x = cos(_angle * PI / 180) * r + x
        const _y = sin(_angle * PI / 180) * r + y
        createCircle1(_x, _y, w, h)
    }
}

function mouseClicked() {
    clear();
}
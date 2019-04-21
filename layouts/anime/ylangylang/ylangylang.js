// const ylangylang = document.querySelector('#ylangylang');
// ylangylang.insertAdjacentHTML('afterbegin', htmlCreater('items', 40));
// ylangylang.insertAdjacentHTML('afterbegin', htmlCreater('items1', 20));
// ylangylang.insertAdjacentHTML('afterbegin', htmlCreater('items2', 40));
// const items = document.querySelector('.items');
// const items1 = document.querySelector('.items1');
// const items2 = document.querySelector('.items2');
// const items3 = document.querySelector('.items3');
// const wrapperWidth = ylangylang.clientWidth;
// const wrapperHeight = ylangylang.clientHeight;
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
//     targets: '.items,.items1,.items2',
//     easing: 'easeOutSine',
//     loop: true
// });
// tl.add({
//             targets: '.items,.items1,.items2',
//             duration: 1700,
//             easing: 'easeInQuad',
//             translateX: [
//                 wrapperWidth / 2 - itemsWidth / 2,
//                 wrapperWidth / 2 - itemsWidth / 2
//             ],
//             translateY: [
//                 wrapperHeight / 2 - itemsHeight / 2,
//                 wrapperHeight / 2 - itemsHeight / 2
//             ],
//             rotateZ: 900,
//             scale: [7, 1.5],
//             filter: ['blur(7)', 'blur(0.3px)']
//         },
//         0
//     )
//     .add({
//         targets: '.items,.items1,.items2',
//         duration: 1500,
//         borderRadius: '50%',
//         translateX: function () {
//             return [anime.random(0, wrapperWidth), anime.random(0, wrapperWidth)];
//         },
//         translateY: function () {
//             return [anime.random(0, wrapperHeight), anime.random(0, wrapperHeight)];
//         },
//         skew: [-80, 80]
//     })
//     .add({
//         targets: '.items,.items1,.items2',
//         duration: 500,
//         skew: 100,
//         scale: [1, 3],
//         opacity: 0,
//         scale: 0
//     });

const data = []
let frameCount = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    background('#FFEE99');
}

function draw() {

    background('#FFEE99');
    frameCount += 1;

    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            data[i].life += 0.6
            if (data[i].life < data[i].life_limit) {
                data[i].r += 0.01
                data[i].w -= 0.7
                data[i].h -= 0.7
                drawCicle1(data[i].x, data[i].y, data[i].w, data[i].h, data[i].r, data[i].length)
                data[i].acc = 0
            } else {
                data.splice(i, 1)
            }
        }
    }

    if (frameCount % 5 === 0) {
        data.push({
            x: random(0, windowWidth),
            y: random(0, windowHeight),
            r: 10,
            vel: 0,
            acc: 1,
            life_limit: 150,
            life: 0,
            length: 1,
            w: 48,
            h: 48
        })
    }
}

function createCircle1(x, y, w, h) {
    stroke(50, 80, random(85, 100));
    strokeWeight(2)
    fill(50, 5, 100, 120);
    ellipseMode(CENTER)
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
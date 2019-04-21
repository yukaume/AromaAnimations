// const lime = document.querySelector('#lime');
// lime.insertAdjacentHTML('afterbegin', htmlCreater('items', 100));
// lime.insertAdjacentHTML('afterbegin', htmlCreater('items1', 100));
// lime.insertAdjacentHTML('afterbegin', htmlCreater('items2', 20));
// const items = document.querySelector('.items');
// const items1 = document.querySelector('.items1');
// const items2 = document.querySelector('.items2');
// const items3 = document.querySelector('.items3');
// const wrapperWidth = lime.clientWidth;
// const wrapperHeight = lime.clientHeight;
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
//             targets: '.items',
//             duration: 900,
//             easing: 'easeOutCubic',
//             translateX: wrapperWidth / 2 - itemsWidth,
//             translateY: [
//                 wrapperHeight / 2 - itemsHeight / 2,
//                 wrapperHeight / 2 - itemsHeight / 2
//             ],
//             scale: 3,
//             rotateZ: 540,
//             background: 'linear-gradient(to top left,#7ED900,#DFFFB3,#AAFF33)',
//             filter: {
//                 value: 'blur(8px)',
//                 delay: 500
//             }
//         },
//         0
//     )
//     .add({
//             targets: '.items1',
//             duration: 900,
//             easing: 'easeOutCubic',
//             translateX: [wrapperWidth - itemsWidth, wrapperWidth / 2 - itemsWidth],
//             translateY: [
//                 wrapperHeight / 2 - itemsHeight / 2,
//                 wrapperHeight / 2 - itemsHeight / 2
//             ],
//             scale: 3,
//             rotateZ: 540,
//             background: 'linear-gradient(to top right,#F2F218,#FEFFBF,#F2FF66)',
//             filter: {
//                 value: 'blur(8px)',
//                 delay: 500
//             }
//         },
//         0
//     )
//     .add({
//         targets: '.items,.items1',
//         easing: 'easeOutCubic',
//         duration: 900,
//         translateX: function () {
//             return anime.random(0, wrapperWidth - itemsWidth);
//         },
//         translateY: function () {
//             return anime.random(0, wrapperHeight - itemsHeight);
//         },
//         scale: 1,
//         rotateZ: 540,
//         filter: 'blur(0px)'
//     })
//     .add({
//         targets: '.items,.items1',
//         easing: 'easeOutCubic',
//         duration: 900,
//         translateX: function () {
//             return anime.random(0, wrapperWidth - itemsWidth);
//         },
//         translateY: function () {
//             return anime.random(0, wrapperHeight - itemsHeight);
//         },
//         rotateZ: 1080,
//         scale: 0.5,
//         opacity: {
//             value: 0,
//             delay: 400
//         }
//     });

const data = []
let frameCount = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    background('#FAFFF2');
}

function draw() {

    background('#FAFFF2');
    frameCount += 1;

    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            data[i].life += 0.6
            if (data[i].life < data[i].life_limit) {
                data[i].r += 3
                data[i].w -= 0.9
                data[i].h -= 0.9
                drawCicle1(data[i].x, data[i].y, data[i].w, data[i].h, data[i].r, data[i].length)
                data[i].acc = 0
            } else {
                data.splice(i, 1)
            }
        }
    }

    if (frameCount % 0.5 === 0) {
        data.push({
            x: random(0, windowWidth),
            y: random(0, windowHeight),
            r: 10,
            vel: 0,
            acc: 1,
            life_limit: 45,
            life: 0,
            length: 1,
            w: 32,
            h: 32
        })
    }
}

function createCircle1(x, y, w, h) {
    stroke(70, 90, 85);
    strokeWeight(4)
    fill(65, 70, 100, 120);
    rectMode(CENTER)
    rect(x, y, w, h)
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
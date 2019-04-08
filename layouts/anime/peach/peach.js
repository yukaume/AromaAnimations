'use strict';

const peach = document.querySelector('#peach');
peach.insertAdjacentHTML('afterbegin', htmlCreater('peachItem1', 30));
peach.insertAdjacentHTML('afterbegin', htmlCreater('peachItem2', 30));
const peachItem1 = document.querySelector('.peachItem1');
const peachItem2 = document.querySelector('.peachItem2');
const wrapperWidth = peach.clientWidth * 0.95;
const wrapperHeight = peach.clientHeight * 0.95;
const itemsWidth = peachItem1.clientWidth;
const itemsHeight = peachItem1.clientHeight;
var countW = (wrapperWidth - itemsWidth * 4) / 3;
var countH = wrapperHeight - itemsHeight;

function htmlCreater(className, number) {
    let html = '';
    for (let i = 0; i < number; i++) {
        html += `<div class ="${className}"></div>`;
    }
    return html;
}

var tl = anime.timeline({
    targets: '.peachItem1,.peachItem2',
    easing: 'linear',
    loop: true
});
tl.add({
            targets: '.peachItem1',
            duration: 0,
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            background: 'linear-gradient(#FFF3F2,#FFD3D1,#FFA9A6)',
            opacity: anime.stagger([0.9, 0.7])
        },
        0
    )
    .add({
            targets: '.peachItem2',
            duration: 0,
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            background: 'linear-gradient(#FFA9A6,#FFD3D1,#FFF3F2)',
            opacity: anime.stagger([0.9, 0.6])
        },
        0
    )
    .add({
        targets: '.peachItem1,.peachItem2',
        duration: 2000,
        easing: 'easeOutBack',
        borderRadius: anime.stagger([50, 30]),
        scale: function () {
            return anime.random(3, 1);
        },
        delay: anime.stagger(5),
        rotateZ: anime.stagger([0, 540]),
        translateX: function () {
            return anime.random(0, wrapperWidth - itemsWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight);
        }
    })
    .add({
            targets: '.peachItem1,.peachItem2',
            duration: 3000,
            delay: anime.stagger(5),
            borderRadius: anime.stagger([50, 48]),
            easing: 'easeInSine',
            skew: [
                -15,
                20,
                -20,
                10,
                -10,
                20,
                -20,
                20,
                -20,
                10,
                -10,
                20,
                -20,
                20,
                -20,
                10,
                -10,
                20,
                -20,
                20,
                -20,
                10,
                -10,
                20,
                -20,
                20,
                -20,
                10,
                -10,
                20,
                -20,
                20,
                -20,
                10,
                -10,
                0
            ]
        },
        '-=1000'
    )
    .add({
        targets: '.peachItem1,.peachItem2',
        duration: 800,
        easing: 'steps(5)',
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2
    })
    .add({
        targets: '.peachItem1,.peachItem2',
        easing: 'easeOutSine',
        duration: 800,
        scale: 16,
        opacity: 0
    });
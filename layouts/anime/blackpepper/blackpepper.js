const blackpepper = document.querySelector('#blackpepper');
blackpepper.insertAdjacentHTML('afterbegin', htmlCreater('items', 50));
blackpepper.insertAdjacentHTML('afterbegin', htmlCreater('items1', 50));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = blackpepper.clientWidth;
const wrapperHeight = blackpepper.clientHeight;
const itemsWidth = items.clientWidth;
const itemsHeight = items.clientHeight;
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
    targets: '.items,.items1',
    easing: 'easeOutSine',
    loop: true
});
tl.add({
        targets: '.items,.items1',
        duration: 10,
        opacity: [0.8, 0.8],
        translateX: function () {
            return [anime.random(0, wrapperWidth), anime.random(0, wrapperWidth)]
        },
        translateY: function () {
            return [anime.random(0, wrapperHeight), anime.random(0, wrapperHeight)]
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 800,
        easing: 'steps(5)',
        skew: 0,
        scale: anime.stagger([0.3, 1]),
        translateX: function () {
            return anime.random(0, wrapperWidth)
        },
        translateY: function () {
            return anime.random(0, wrapperHeight)
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 800,
        easing: 'steps(5)',
        skew: 0,
        scale: 1,
        translateX: function () {
            return anime.random(0, wrapperWidth)
        },
        translateY: function () {
            return anime.random(0, wrapperHeight)
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 1000,
        skew: [0, -30, 20, -30, 30, 0],
        scale: 1
    })
    .add({
        targets: '.items,.items1',
        duration: 100,
        scale: anime.stagger([2.5, 5])
    }).add({
        targets: '.items,.items1',
        duration: 100,
        scale: 0
    });
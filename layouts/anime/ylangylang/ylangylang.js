const ylangylang = document.querySelector('#ylangylang');
ylangylang.insertAdjacentHTML('afterbegin', htmlCreater('items', 40));
ylangylang.insertAdjacentHTML('afterbegin', htmlCreater('items1', 20));
ylangylang.insertAdjacentHTML('afterbegin', htmlCreater('items2', 40));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = ylangylang.clientWidth;
const wrapperHeight = ylangylang.clientHeight;
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
    targets: '.items,.items1,.items2',
    easing: 'easeOutSine',
    loop: true
});
tl.add({
            targets: '.items,.items1,.items2',
            duration: 1700,
            easing: 'easeInQuad',
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            rotateZ: 900,
            scale: [7, 1.5],
            filter: ['blur(7)', 'blur(0.3px)']
        },
        0
    )
    .add({
        targets: '.items,.items1,.items2',
        duration: 1500,
        borderRadius: '50%',
        translateX: function () {
            return [anime.random(0, wrapperWidth), anime.random(0, wrapperWidth)];
        },
        translateY: function () {
            return [anime.random(0, wrapperHeight), anime.random(0, wrapperHeight)];
        },
        skew: [-80, 80]
    })
    .add({
        targets: '.items,.items1,.items2',
        duration: 500,
        skew: 100,
        scale: [1, 3],
        opacity: 0,
        scale: 0
    });
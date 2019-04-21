const orange = document.querySelector('#orange');
orange.insertAdjacentHTML('afterbegin', htmlCreater('items', 50));
orange.insertAdjacentHTML('afterbegin', htmlCreater('items1', 50));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = orange.clientWidth;
const wrapperHeight = orange.clientHeight;
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
            targets: '.items',
            duration: 10,
            scale: function () {
                return [anime.random(0.5, 5), anime.random(0.5, 5)]
            },
            easing: 'linear',
            translateX: function (el, i, len) {
                const angle = (360 / len) * i;
                const radian = Math.PI / 180;
                return Math.sin(angle * radian) * wrapperWidth / 2;
            },
            translateY: function (el, i, len) {
                const angle = (360 / len) * i;
                const radian = Math.PI / 180;
                return Math.cos(angle * radian) * wrapperHeight / 2;
            },
            opacity: [0, 0]
        },
        0
    )
    .add({
            targets: '.items1',
            duration: 10,
            scale: function () {
                return [anime.random(0.5, 5), anime.random(0.5, 5)]
            },
            easing: 'linear',
            translateX: function (el, i, len) {
                const angle = (360 / len) * i;
                const radian = Math.PI / 180;
                return Math.sin(angle * radian) * wrapperWidth / 2;
            },
            translateY: function (el, i, len) {
                const angle = (360 / len) * i;
                const radian = Math.PI / 180;
                return Math.cos(angle * radian) * wrapperHeight / 2;
            },
            opacity: [0, 0]
        },
        0
    )
    .add({
        targets: '.items',
        duration: 1000,
        opacity: [0.8, 0.8],
        right: [
            wrapperWidth / 2 - itemsWidth * 4,
            wrapperWidth / 2 + itemsWidth * 4
        ],
        bottom: [
            wrapperHeight / 2 - itemsHeight * 3,
            wrapperHeight / 2 + itemsHeight * 4
        ],
        scale: function () {
            return anime.random(0.5, 4)
        },
        rotateY: 540
    })
    .add({
        targets: '.items1',
        duration: 1000,
        opacity: [1, 1],
        right: [
            wrapperWidth / 2 - itemsWidth * 4,
            wrapperWidth / 2 + itemsWidth * 4
        ],
        bottom: [
            wrapperHeight / 2 - itemsHeight * 3,
            wrapperHeight / 2 + itemsHeight * 4
        ],
        scale: function () {
            return anime.random(0.5, 4)
        },
        rotateY: 540,
        zIndex: [1, 1]
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutExpo',
        delay: 200,
        duration: 1000,
        translateX: function () {
            return anime.random(-50, 50);
        },
        translateY: function () {
            return anime.random(-30, 30);
        },
        scale: function () {
            return anime.random(0.5, 5)
        },
        rotateZ: 2000
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuint',
        duration: 800,
        delay: anime.stagger(5),
        scale: 6,
        opacity: 0
    });
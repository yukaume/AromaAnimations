const jasmine = document.querySelector('#jasmine');
jasmine.insertAdjacentHTML('afterbegin', htmlCreater('items', 60));
jasmine.insertAdjacentHTML('afterbegin', htmlCreater('items1', 60));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = jasmine.clientWidth;
const wrapperHeight = jasmine.clientHeight;
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
    easing: 'easeInSine',
    loop: true,
    background: 'linear-gradient(to top left,#FFB366,#FFF5D9,#FFD659)'
});
tl.add({
        targets: '.items,.items1',
        duration: 300,
        translateX: [
            wrapperWidth / 2 - itemsWidth / 2,
            wrapperWidth / 2 - itemsWidth / 2
        ],
        translateY: [
            wrapperHeight / 2 - itemsHeight / 2,
            wrapperHeight / 2 - itemsHeight / 2
        ],
        opacity: [0, 0.9]
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutQuad',
        duration: 1500,
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth);
        },
        translateY: function () {
            return anime.random(itemsHeight * 2, wrapperHeight - itemsHeight * 2);
        },
        rotateX: function () {
            return anime.random(0, 540);
        },
        rotateY: function () {
            return anime.random(0, 360);
        },
        opacity: 0.9,
        borderRadius: ['50%', '30%', '50%']
    })
    .add({
        targets: '.items,.items1',
        duration: 1500,
        easing: 'easeOutQuad',
        rotateX: function () {
            return anime.random(-540, 540);
        },
        rotateY: function () {
            return anime.random(-540, 540);
        },
        scale: function () {
            return anime.random(0.5, 4);
        },
        borderRadius: ['50%', '20%', '50%']
    })
    .add({
        targets: '.items,.items1',
        duration: 1500,
        easing: 'easeInQuad',
        rotateX: function () {
            return anime.random(540, -540);
        },
        rotateY: function () {
            return anime.random(360, -540);
        },
        borderRadius: ['50%', '40%', '50%']
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutQuad',
        duration: 800,
        rotateX: function () {
            return anime.random(540, -540);
        },
        rotateY: function () {
            return anime.random(360, -540);
        },
        scale: [5, 0]
    });
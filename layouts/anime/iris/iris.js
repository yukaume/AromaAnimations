const iris = document.querySelector('#iris');
iris.insertAdjacentHTML('afterbegin', htmlCreater('items', 35));
iris.insertAdjacentHTML('afterbegin', htmlCreater('items1', 35));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = iris.clientWidth;
const wrapperHeight = iris.clientHeight;
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
    easing: 'linear',
    loop: true
});
tl.add({
            targets: '.items',
            duration: 1,
            easing: 'easeInCubic',
            translateX: function () {
                return anime.random(0, wrapperWidth - itemsWidth)
            },
            translateY: function () {
                return anime.random(0, wrapperHeight - itemsHeight)
            },
            opacity: 0.8,
            scale: 0.5
        },
        0
    )
    .add({
            targets: '.items1',
            duration: 1,
            easing: 'easeInCubic',
            translateX: function () {
                return anime.random(0, wrapperWidth - itemsWidth)
            },
            translateY: function () {
                return anime.random(0, wrapperHeight - itemsHeight)
            },
            opacity: 0.9,
            scale: 0.5
        },
        0
    ).add({
        targets: '.items,.items1',
        duration: 600,
        easing: 'easeOutCubic',
        opacity: 0.9,
        scale: 1.5
    }).add({
        targets: '.items,.items1',
        duration: 300,
        easing: 'easeOutCubic',
        opacity: 0.5,
        scale: 0.5
    }).add({
        targets: '.items,.items1',
        duration: 800,
        easing: 'easeOutCubic',
        translateX: function () {
            return anime.random(0, wrapperWidth - itemsWidth)
        },
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight)
        },
        opacity: 0.9,
        scale: 2.5
    })
    .add({
        targets: '.items,.items1',
        duration: 600,
        easing: 'easeOutCubic',
        opacity: 1,
        scale: 2.5,
        filter: {
            value: 'blur(10px)',
            delay: 400
        }
    }).add({
        targets: '.items,.items1',
        duration: 1000,
        easing: 'easeOutCubic',
        translateX: function () {
            return anime.random(0, wrapperWidth - itemsWidth)
        },
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight)
        },
        opacity: 0,
        scale: 0,
        filter: 'blur(0px)'
    })
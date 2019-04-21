const raspberry = document.querySelector('#raspberry');
raspberry.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
raspberry.insertAdjacentHTML('afterbegin', htmlCreater('items1', 50));
raspberry.insertAdjacentHTML('afterbegin', htmlCreater('items2', 30));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = raspberry.clientWidth;
const wrapperHeight = raspberry.clientHeight;
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
            easing: 'easeInExpo',
            duration: 500,
            opacity: [0.8, 0.8],
            translateY: function (el, i) {
                return [anime.random(0, wrapperHeight), anime.random(0, wrapperHeight)];
            },
            translateX: function () {
                return [anime.random(itemsWidth, wrapperWidth - itemsWidth), anime.random(itemsWidth, wrapperWidth - itemsWidth)];
            }
        },
        0
    )
    .add({
        targets: '.items,.items1,.items2',
        easing: 'easeOutExpo',
        duration: 500,
        opacity: [0.7, 0.7],
        translateY: function () {
            return anime.random(itemsHeight, wrapperHeight)
        },
        translateX: function (el, i) {
            anime.random(itemsWidth, wrapperWidth - itemsWidth)
        }
    })
    .add({
        targets: '.items,.items1,.items2',
        duration: 800,
        delay: anime.stagger(4),
        scale: [1, 3, 1]
    })
    .add({
        targets: '.items,.items1,.items2',
        easing: 'easeInQuart',
        duration: 600,
        opacity: [0.7, 0.7],
        translateY: function () {
            return anime.random(itemsHeight, wrapperHeight)
        },
        translateX: function (el, i) {
            anime.random(itemsWidth, wrapperWidth - itemsWidth)
        }
    })
    .add({
        targets: '.items,.items1,.items2',
        easing: 'easeOutQuart',
        duration: 600,
        translateY: function () {
            return anime.random(itemsHeight * 2, wrapperHeight - itemsHeight * 2);
        },
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        endDelay: 100
    })
    .add({
        targets: '.items,.items1,.items2',
        duration: 600,
        delay: anime.stagger(8),
        scale: [1, 5, 0]
    });
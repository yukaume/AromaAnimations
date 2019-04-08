const raspberry = document.querySelector('#raspberry');
raspberry.insertAdjacentHTML('afterbegin', htmlCreater('items', 25));
raspberry.insertAdjacentHTML('afterbegin', htmlCreater('items1', 30));
raspberry.insertAdjacentHTML('afterbegin', htmlCreater('items2', 25));
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
            duration: 1000,
            opacity: [0.8, 0.8],
            translateY: function (el, i) {
                return [anime.random(0, wrapperHeight), anime.random(0, wrapperHeight)];
            },
            translateX: function () {
                return [anime.random(itemsWidth * 4, wrapperWidth - itemsWidth * 4), anime.random(itemsWidth * 4, wrapperWidth - itemsWidth * 4)];
            }
        },
        0
    )
    .add({
        targets: '.items,.items1,.items2',
        easing: 'easeOutQuart',
        duration: 600,
        opacity: [0.7, 0.7],
        translateY: function () {
            return anime.random(itemsHeight, wrapperHeight)
        },
        translateX: function (el, i) {
            anime.random(itemsWidth * 4, wrapperWidth - itemsWidth * 4)
        }
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
            anime.random(itemsWidth * 4, wrapperWidth - itemsWidth * 4)
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
        endDelay: 300
    })
    .add({
        targets: '.items,.items1,.items2',
        duration: 800,
        delay: anime.stagger(5),
        scale: [1, 0.2, 5, 0]
    });
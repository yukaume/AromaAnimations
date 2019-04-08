const saffron = document.querySelector('#saffron');
saffron.insertAdjacentHTML('afterbegin', htmlCreater('items', 70));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = saffron.clientWidth;
const wrapperHeight = saffron.clientHeight;
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
    loop: true,
    background: ['linear-gradient(to top left,#E6372E,#FFFFB3,#CC3129)', 'linear-gradient(to top left,#E6372E,#FFFFB3,#CC3129)'],
    opacity: [0.8, 0.8]
});
tl.add({
        targets: '.items,.items1',
        duration: 1000,
        delay: anime.stagger(4),
        translateX: function (el, i) {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth);
        },
        translateY: function (el, i) {
            return anime.random(itemsHeight, wrapperHeight - itemsHeight);
        },
        skew: -10,
        rotateZ: [-180, 180]
    })
    .add({
        targets: '.items,.items1',
        delay: anime.stagger(8),
        duration: 800,
        rotateX: 540,
        rotateY: 180,
        rotateZ: 360,
        height: 40,
        width: 40,
        skew: 10,
        scale: 1
    })
    .add({
        targets: '.items',
        duration: 600,
        delay: anime.stagger(8),
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2
    })
    .add({
        targets: '.items',
        duration: 1000,
        easing: 'easeInSine',
        delay: anime.stagger(4),
        rotateZ: function (el, i) {
            return 5 + i * 5;
        },
        translateX: function (el, i) {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth);
        },
        translateY: function (el, i) {
            return anime.random(itemsHeight, wrapperHeight - itemsHeight);
        },
        scale: 2,
        opacity: 0
    });
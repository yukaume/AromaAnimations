const chocolate = document.querySelector('#chocolate');
chocolate.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
chocolate.insertAdjacentHTML('afterbegin', htmlCreater('items1', 25));
chocolate.insertAdjacentHTML('afterbegin', htmlCreater('items2', 20));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = chocolate.clientWidth;
const wrapperHeight = chocolate.clientHeight;
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
            duration: 10,
            easing: 'linear',
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            scale: [7, 7]
        },
        0
    )
    .add({
        targets: '.items,.items1,.items2',
        duration: 1000,
        easing: 'easeInQuint',
        scale: 0
    })
    .add({
        targets: '.items,.items1,.items2',
        easing: 'easeOutQuint',
        duration: 2500,
        scale: 3,
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        }
    })
    .add({
            targets: '.items,.items1,.items2',
            duration: 1000,
            scale: function () {
                return anime.random(0.5, 6)
            },
            skewX: [50, -50, 50, -50, 50, -50, 50, -50, 40, -40, 40, -40, 30, -30, 30, -30, 0]
        },
        '-=900'
    )
    .add({
        targets: '.items,.items1,.items2',
        easing: 'easeOutQuint',
        duration: 800,
        scale: [2, 5, 0]
    });
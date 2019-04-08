const fennel = document.querySelector('#fennel');
fennel.insertAdjacentHTML('afterbegin', htmlCreater('items', 40));
fennel.insertAdjacentHTML('afterbegin', htmlCreater('items1', 50));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = fennel.clientWidth;
const wrapperHeight = fennel.clientHeight;
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
            easing: 'linear',
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ]
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 600,
        easing: 'easeInSine',
        endDelay: 200,
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        opacity: 0.9
    })
    .add({
        targets: '.items,.items1',
        duration: 1500,
        delay: anime.stagger(4),
        easing: 'easeOutSine',
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        skew: [0, -30, 30, -30, 30, -30, 30, -20, 20, -20, 20, -20, 10, -10, 0],
        opacity: 0.9
    })
    .add({
        targets: '.items,.items1',
        duration: 1500,
        easing: 'easeOutCirc',
        skew: [0, -30, 30, -30, 30, -30, 30, -20, 20, -20, 20, -20, 10, -10, 0],
        scale: function () {
            return anime.random(0.5, 5)
        },
    })
    .add({
        targets: '.items,.items1',
        duration: 1000,
        easing: 'easeInCirc',
        scale: [0, 5, 1, 6, 1, 5, 1, 5, 1, 5, 5, 1, 6, 1, 5],

    })
    .add({
        targets: '.items,.items1',
        duration: 500,
        easing: 'easeInCirc',
        opacity: 0
    });
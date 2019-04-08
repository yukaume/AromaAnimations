const whitemusk = document.querySelector('#whitemusk');
whitemusk.insertAdjacentHTML('afterbegin', htmlCreater('items', 20));
whitemusk.insertAdjacentHTML('afterbegin', htmlCreater('items1', 20));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = whitemusk.clientWidth;
const wrapperHeight = whitemusk.clientHeight;
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
    easing: 'easeInSine',
    loop: true
});
tl.add({
        targets: '.items,.items1',
        duration: 1600,
        translateX: function () {
            return [wrapperWidth / 2, anime.random(itemsWidth, wrapperWidth - itemsWidth)];
        },
        translateY: function () {
            return [wrapperHeight / 2, anime.random(itemsHeight, wrapperHeight - itemsHeight)];
        },
        filter: 'blur(1px)',
        scale: [
            1,
            0.5,
            1.2,
            0.3,
            1,
            0.2,
            1.1,
            0.4,
            1,
            0.5,
            1,
            0.5,
            1.2,
            0.2,
            1,
            0.4,
            1.2,
            0.5,
            1,
            0.4,
            1.1,
            0.3,
            1,
            0.5,
            1,
            0.4,
            1.1,
            0.2,
            1,
            0.5
        ]
    })
    .add({
        targets: '.items,.items1',
        duration: 1600,
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2,
        filter: 'blur(0px)',
        scale: [
            1,
            0.5,
            1.2,
            0.3,
            1,
            0.2,
            1.1,
            0.4,
            1,
            0.5,
            1,
            0.5,
            1.2,
            0.2,
            1,
            0.4,
            1.2,
            0.5,
            1,
            0.4,
            1.1,
            2
        ],
        borderRadius: '50%',

    })
    .add({
            targets: '.items,.items1',
            duration: 1200,
            borderRadius: '50%',
            scale: function () {
                return anime.random(1, 10);
            },
            opacity: {
                value: 0,
                delay: 800
            },
            filter: 'blur(10px)'

        },
        '+=200'
    );
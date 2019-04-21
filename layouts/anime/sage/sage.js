const sage = document.querySelector('#sage');
sage.insertAdjacentHTML('afterbegin', htmlCreater('items', 120));
const items = document.querySelector('.items');
const wrapperWidth = sage.clientWidth;
const wrapperHeight = sage.clientHeight;
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
            easing: 'easeInQuad',
            opacity: [0.7, 0.7],
            duration: 300,
            translateY: [wrapperHeight / 2 + itemsHeight, wrapperHeight / 2 - itemsHeight],
            translateX: function () {
                return [anime.random(itemsWidth, wrapperWidth - itemsWidth), anime.random(itemsWidth, wrapperWidth - itemsWidth)]
            }
        },
        0
    )
    .add({
            targets: '.items',
            duration: 600,
            easing: 'easeInOutExpo',
            delay: anime.stagger(4),
            top: function () {
                return [anime.random(0, 6), anime.random(0, 5), anime.random(0, 5)];
            },
            bottom: function () {
                return [anime.random(0, 6), anime.random(0, 5), anime.random(0, 5)];
            },
            rotateZ: [0, 35, -35, 0],
            endDelay: 400
        },
        0
    )
    .add({
        targets: '.items',
        duration: 300,
        easing: 'easeInQuint',
        delay: anime.stagger(3),
        scale: function () {
            return anime.random(0.5, 2.5)
        },
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2
    })
    .add({
        targets: '.items',
        duration: 1000,
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        borderRadius: '50%'
    })
    .add({
            targets: '.items',
            duration: 1000,
            easing: 'steps(8)',
            translateX: function () {
                return anime.random(0, wrapperWidth);
            },
            translateY: function () {
                return anime.random(0, wrapperHeight);
            },
            endDelay: 400
        },
        '-=150'
    )
    .add({
        targets: '.items',
        duration: 800,
        delay: anime.stagger(9),
        scale: 0,
        opacity: 0.3
    });
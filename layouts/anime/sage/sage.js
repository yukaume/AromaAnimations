const sage = document.querySelector('#sage');
sage.insertAdjacentHTML('afterbegin', htmlCreater('items', 100));
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
            opacity: [0.6, 1, 0.6],
            duration: 300,
            translateY: [wrapperHeight / 2, wrapperHeight / 2],
            translateX: function () {
                return [anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3), anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3)]
            }
        },
        0
    )
    .add({
            targets: '.items',
            duration: 600,
            easing: 'easeInOutExpo',
            delay: anime.stagger(5),
            top: function () {
                return [anime.random(0, 6), anime.random(0, 5), anime.random(0, 5)];
            },
            bottom: function () {
                return [anime.random(0, 6), anime.random(0, 5), anime.random(0, 5)];
            },
            rotateZ: [0, 15, 0, -15, 0],
            endDelay: 400
        },
        0
    )
    .add({
        targets: '.items',
        duration: 400,
        easing: 'easeInQuint',
        delay: anime.stagger(5),
        scale: function () {
            return anime.random(0.8, 3)
        },
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2
    })
    .add({
        targets: '.items',
        duration: 1000,
        translateX: function () {
            return anime.random(wrapperWidth / 4, (wrapperWidth / 3) * 1.9);
        },
        translateY: function () {
            return anime.random(wrapperWidth / 4, (wrapperWidth / 3) * 1.8);
        },
        borderRadius: '50%'
    })
    .add({
            targets: '.items',
            duration: 1500,
            easing: 'steps(8)',
            translateX: function () {
                return anime.random(wrapperWidth / 4, (wrapperWidth / 3) * 1.9);
            },
            translateY: function () {
                return anime.random(wrapperWidth / 4, (wrapperWidth / 3) * 1.8);
            },
            endDelay: 400
        },
        '-=150'
    )
    .add({
        targets: '.items',
        duration: 500,
        delay: anime.stagger(8),
        scale: 0,
        opacity: 0.2
    });
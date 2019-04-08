const cinnammon = document.querySelector('#cinnammon');
cinnammon.insertAdjacentHTML('afterbegin', htmlCreater('items', 35));
cinnammon.insertAdjacentHTML('afterbegin', htmlCreater('items1', 35));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = cinnammon.clientWidth;
const wrapperHeight = cinnammon.clientHeight;
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
            targets: '.items,.items1',
            duration: 800,
            easing: 'easeOutCubic',
            // translateX: [
            //     wrapperWidth / 2 - itemsWidth / 2,
            //     wrapperWidth / 2 - itemsWidth / 2
            // ],
            // translateY: [
            //     wrapperHeight / 2 - itemsHeight / 2,
            //     wrapperHeight / 2 - itemsHeight / 2
            // ],
            translateX: function () {
                return [anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3), anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3)]
            },
            translateY: function () {
                return [anime.random(itemsHeight, wrapperHeight), anime.random(itemsHeight, wrapperHeight)]
            },
            scale: function () {
                return [anime.random(0, 0), anime.random(0.3, 2.5)]
            },
            opacity: [0.8, 0.8],
            delay: anime.stagger(6),
        },
        0
    ).add({
        targets: '.items,.items1',
        duration: 800,
        delay: anime.stagger(6),
        easing: 'easeInCubic',
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth)
        },
        translateY: function () {
            return anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3)
        },
        scale: function () {
            return anime.random(1, 6)
        },
        rotateZ: 540
    }, '-=150')
    .add({
        targets: '.items,.items1',
        duration: 800,
        delay: anime.stagger(6),
        easing: 'easeOutCubic',
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth)
        },
        translateY: function () {
            return anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3)
        },
        scale: function () {
            return anime.random(0.1, 1)
        },
        rotateZ: 540
    }, '-=150')
    .add({
        targets: '.items,.items1',
        duration: 800,
        delay: anime.stagger(6),
        easing: 'easeInCubic',
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth)
        },
        translateY: function () {
            return anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3)
        },
        scale: 0,
        rotateZ: -540
    })
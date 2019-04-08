const tuberose = document.querySelector('#tuberose');
tuberose.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
tuberose.insertAdjacentHTML('afterbegin', htmlCreater('items1', 30));
tuberose.insertAdjacentHTML('afterbegin', htmlCreater('items2', 30));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = tuberose.clientWidth;
const wrapperHeight = tuberose.clientHeight;
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
            duration: 0,
            easing: 'easeInQuart',
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            filter: ['blur(20px)', 'blur(10px)'],
            scale: 2
        },
        0
    )
    .add({
            targets: '.items1',
            duration: 0,
            easing: 'easeInQuart',
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            filter: ['blur(20px)', 'blur(10px)'],
            scale: 2
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 1600,
        easing: 'easeInExpo',
        scale: 0.2
    })
    .add({
        targets: '.items,.items1',
        duration: 1600,
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: 0.5,
        filter: 'blur(0px)'
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInCirc',
        duration: 800,
        translateY: wrapperHeight - itemsHeight
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutCirc',
        duration: 400,
        translateY: itemsHeight,
        skew: 90,
        opacity: 0
    });
const tuberose = document.querySelector('#tuberose');
tuberose.insertAdjacentHTML('afterbegin', htmlCreater('items', 40));
tuberose.insertAdjacentHTML('afterbegin', htmlCreater('items1', 40));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
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
            targets: '.items,.items1',
            duration: 0,
            easing: 'easeInQuart',
            translateX: function () {
                return [anime.random(0, wrapperWidth), anime.random(0, wrapperWidth)];
            },
            translateY: function () {
                return [anime.random(0, wrapperHeight), anime.random(0, wrapperHeight)];
            },
            scale: function () {
                return anime.random(1, 3)
            }
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 300,
        easing: 'easeInCubic',
        scale: 0
    })
    .add({
        targets: '.items,.items1',
        duration: 300,
        easing: 'easeOutCubic',
        scale: function () {
            return anime.random(1, 3)
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 500,
        easing: 'easeOutCubic',
        scale: 0
    })
    .add({
        targets: '.items,.items1',
        duration: 2000,
        easing: 'easeOutSine',
        rotateZ: anime.stagger(15),
        scale: function () {
            return anime.random(1, 8)
        },
        opacity: {
            value: 0,
            delay: 300
        }
    })
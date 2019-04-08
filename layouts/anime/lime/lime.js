const lime = document.querySelector('#lime');
lime.insertAdjacentHTML('afterbegin', htmlCreater('items', 100));
lime.insertAdjacentHTML('afterbegin', htmlCreater('items1', 100));
lime.insertAdjacentHTML('afterbegin', htmlCreater('items2', 20));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = lime.clientWidth;
const wrapperHeight = lime.clientHeight;
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
            duration: 900,
            easing: 'easeOutCubic',
            translateX: wrapperWidth / 2 - itemsWidth,
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            scale: 3,
            rotateZ: 540,
            background: 'linear-gradient(to top left,#7ED900,#DFFFB3,#AAFF33)',
            filter: {
                value: 'blur(8px)',
                delay: 500
            }
        },
        0
    )
    .add({
            targets: '.items1',
            duration: 900,
            easing: 'easeOutCubic',
            translateX: [wrapperWidth - itemsWidth, wrapperWidth / 2 - itemsWidth],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            scale: 3,
            rotateZ: 540,
            background: 'linear-gradient(to top right,#F2F218,#FEFFBF,#F2FF66)',
            filter: {
                value: 'blur(8px)',
                delay: 500
            }
        },
        0
    )
    .add({
        targets: '.items,.items1',
        easing: 'easeOutCubic',
        duration: 900,
        translateX: function () {
            return anime.random(0, wrapperWidth - itemsWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight);
        },
        scale: 1,
        rotateZ: 540,
        filter: 'blur(0px)'
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutCubic',
        duration: 900,
        translateX: function () {
            return anime.random(0, wrapperWidth - itemsWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight);
        },
        rotateZ: 1080,
        scale: 0.5,
        opacity: {
            value: 0,
            delay: 400
        }
    });
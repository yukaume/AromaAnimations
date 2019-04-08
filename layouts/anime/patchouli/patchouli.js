const patchouli = document.querySelector('#patchouli');
patchouli.insertAdjacentHTML('afterbegin', htmlCreater('items', 100));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = patchouli.clientWidth;
const wrapperHeight = patchouli.clientHeight;
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
    targets: '.items',
    easing: 'easeOutSine',
    background: 'linear-gradient(#CCFF00,#F0FFB3,#ADD900)',
    loop: true
});


tl.add({
        targets: '.items',
        duration: 800,
        translateX: [
            wrapperWidth / 2 - itemsWidth / 2,
            wrapperWidth / 2 - itemsWidth / 2
        ],
        translateY: [
            wrapperHeight / 2 - itemsHeight / 2,
            wrapperHeight / 2 - itemsHeight / 2
        ],
        scale: anime.stagger([1, 10]),
        rotateZ: anime.stagger([10, 540])
    })
    .add({
        targets: '.items1',
        duration: 1200,
        easing: 'easeInSine',
        translateX: [
            wrapperWidth / 2 - itemsWidth / 2,
            wrapperWidth / 2 - itemsWidth / 2
        ],
        translateY: [
            wrapperHeight / 2 - itemsHeight / 2,
            wrapperHeight / 2 - itemsHeight / 2
        ],
        scale: anime.stagger([1, 10]),
        rotateZ: anime.stagger([10, 540])
    })
    .add({
        targets: '.items,.items1',
        duration: 1500,
        delay: anime.stagger(8),
        rotateZ: 2000,
        scale: function () {
            return anime.random(1, 3.5);
        }
    })
    .add({
        targets: '.items,.items1',
        rotateZ: anime.stagger([10, 540]),
        duration: 1000,
        opacity: [1, 0],
        scale: [10, 0],
        borderWidth: [1, 7]
    });
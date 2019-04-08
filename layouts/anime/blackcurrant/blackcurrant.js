const blackcurrant = document.querySelector('#blackcurrant');
blackcurrant.insertAdjacentHTML('afterbegin', htmlCreater('items', 45));
blackcurrant.insertAdjacentHTML('afterbegin', htmlCreater('items1', 40));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = blackcurrant.clientWidth;
const wrapperHeight = blackcurrant.clientHeight;
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
    loop: true
});
tl.add({
            targets: '.items,.items1',
            easing: 'easeOutSine',
            duration: 0,
            translateX: anime.stagger([0, wrapperWidth]),
            translateY: anime.stagger([itemsHeight * 2, wrapperHeight - itemsHeight * 2]),
            opacity: [0.6, 0.6],
            scale: 2
        },
        0
    )
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuad',
        duration: 600,
        translateX: anime.stagger([itemsWidth * 2, wrapperWidth - itemsWidth * 2]),
        rotateZ: 360,
        scale: 1
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuad',
        duration: 800,
        rotateZ: -360,
        borderRadius: '50%'
    })
    .add({
        targets: '.items,.items1',
        delay: 200,
        easing: 'easeOutCirc',
        duration: 800,
        translateX: function () {
            return anime.random(0, wrapperWidth)
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: 1
    })
    .add({
        targets: '.items,.items1',
        delay: 200,
        easing: 'easeOutCirc',
        duration: 800,
        translateX: function () {
            return anime.random(0, wrapperWidth)
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: 0.6
    })
    .add({
        targets: '.items,.items1',
        delay: 200,
        easing: 'easeOutCirc',
        duration: 600,
        scale: [3, 0]
    });
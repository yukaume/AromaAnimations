const blackcurrant = document.querySelector('#blackcurrant');
blackcurrant.insertAdjacentHTML('afterbegin', htmlCreater('items', 50));
blackcurrant.insertAdjacentHTML('afterbegin', htmlCreater('items1', 40));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
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
    targets: '.items,.items1',
    opacity: [0.8, 0.8],
    loop: true
});
tl.add({
        targets: '.items,.items1',
        easing: 'easeInQuad',
        duration: 1,
        translateX: function () {
            return anime.random(0, wrapperWidth)
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        rotateZ: -360,
        borderRadius: '50%'
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutCirc',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInCirc',
        duration: 400,
        scale: 5
    }).add({
        targets: '.items,.items1',
        easing: 'easeOutCirc',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInCirc',
        duration: 800,
        skew: [0, 40, -40, 0],
        scale: 4
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutCirc',
        duration: 500,
        scale: 1
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInCirc',
        duration: 800,
        skew: [0, 80, -80, 0],
        scale: 4
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutCirc',
        duration: 700,
        scale: 1
    })
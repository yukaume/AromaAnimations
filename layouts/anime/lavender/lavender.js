const lavender = document.querySelector('#lavender');
lavender.insertAdjacentHTML('afterbegin', htmlCreater('items', 50));
lavender.insertAdjacentHTML('afterbegin', htmlCreater('items1', 50));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = lavender.clientWidth;
const wrapperHeight = lavender.clientHeight;
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
            duration: 100,
            translateX: function (el, i) {
                return anime.random(0, wrapperWidth);
            },
            translateY: function (el, i) {
                return anime.random(0, wrapperHeight);
            },
            opacity: [0, 0]
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 10,
        easing: 'easeOutQuart',
        opacity: [0, 0.9]
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInOutSine',
        duration: 1000,
        scale: [0.5, 2, 0.2, 4, 0.4, 2.5],
        endDelay: 300
    })
    .add({
        targets: '.items,.items1',
        duration: 1000,
        rotateX: [-360, 360],
        rotateY: [-360, 360],
        scale: anime.stagger([0.8, 3.5])
    })
    .add({
        targets: '.items,.items1',
        filter: 'blur(10px)',
        duration: 1000,
        opacity: 1,
    })
    .add({
        targets: '.items,.items1',
        duration: 300,
        opacity: 0
    });
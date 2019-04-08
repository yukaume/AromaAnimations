const iris = document.querySelector('#iris');
iris.insertAdjacentHTML('afterbegin', htmlCreater('items', 35));
iris.insertAdjacentHTML('afterbegin', htmlCreater('items1', 35));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = iris.clientWidth;
const wrapperHeight = iris.clientHeight;
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
            targets: '.items',
            duration: 600,
            easing: 'easeInCubic',
            translateX: anime.stagger([itemsWidth * 2, wrapperWidth - itemsWidth * 2]),
            translateY: anime.stagger([itemsHeight * 2, wrapperHeight - itemsHeight * 2]),
            opacity: 0.8,
        },
        0
    )
    .add({
            targets: '.items1',
            easing: 'easeInCubic',
            duration: 600,
            translateX: anime.stagger([itemsWidth * 2, wrapperWidth - itemsWidth * 2]),
            translateY: anime.stagger([itemsHeight * 2, wrapperHeight - itemsHeight * 2]),
            opacity: 0.8,
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 600,
        easing: 'easeOutQuart',
        translateX: anime.stagger([itemsWidth * 2, wrapperWidth - itemsWidth * 2]),
        translateY: anime.stagger([itemsHeight * 2, wrapperHeight - itemsHeight * 2])
    })
    .add({
        targets: '.items,.items1',
        duration: 1200,
        easing: 'easeInQuart',
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInCubic',
        duration: 1500,
        translateX: function () {
            return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
        },
        translateY: function () {
            return anime.random(itemsHeight * 2, wrapperHeight - itemsHeight * 2);
        },
        scale: function () {
            return anime.random(0.5, 3)
        },
        opacity: 0.8,
    })
    .add({
        targets: '.items,.items1',
        duration: 800,
        filter: 'blur(5px)',
        opacity: 0
    });
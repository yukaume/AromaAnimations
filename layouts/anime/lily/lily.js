const lily = document.querySelector('#lily');
lily.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
lily.insertAdjacentHTML('afterbegin', htmlCreater('items1', 30));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = lily.clientWidth;
const wrapperHeight = lily.clientHeight;
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
            duration: 5,
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            opacity: [0.8, 0.8]
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 800,
        delay: anime.stagger(15),
        easing: 'steps(10)',
        rotateZ: 2000,
        scale: anime.stagger([1, 6])
    })
    .add({
        targets: '.items,.items1',
        duration: 1000,
        delay: anime.stagger(5),
        translateX: function () {
            return anime.random(0, wrapperWidth)
        },
        translateY: function () {
            return anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3)
        },
        scale: function () {
            return anime.random(0.8, 3)
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 1000,
        delay: anime.stagger(5),
        skewY: [-15, 15, -15, 15, -15, 15],
        scale: function () {
            return anime.random(0.8, 3)
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 800,
        delay: anime.stagger(5),
        skewX: 80,
        scale: function () {
            return anime.random(0.8, 3)
        },
        opacity: 0
    })
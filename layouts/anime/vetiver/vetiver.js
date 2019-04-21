const vetiver = document.querySelector('#vetiver');
vetiver.insertAdjacentHTML('afterbegin', htmlCreater('items', 55));
vetiver.insertAdjacentHTML('afterbegin', htmlCreater('items1', 55));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = vetiver.clientWidth;
const wrapperHeight = vetiver.clientHeight;
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

            duration: 1,
            translateX: function () {
                return [anime.stagger([0, wrapperWidth - itemsWidth]), anime.stagger([0, wrapperWidth - itemsWidth])];
            },
            translateY: function () {
                return [anime.random(itemsHeight, wrapperHeight - itemsHeight), anime.random(itemsHeight, wrapperHeight - itemsHeight)];
            },
            opacity: [0, 0],
            scale: anime.stagger([0.3, 2.5]),
            rotateZ: anime.stagger([-90, 90]),
            skewY: [35, 35]
        },
        0
    )
    .add({
        targets: '.items,.items1',
        easing: 'easeInCubic',
        duration: 300,
        opacity: 0.8,
        skewY: [30, 30]
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutCubic',
        duration: 800,
        opacity: 0.8,
        skewY: [30, -45, 30],
        endDelay: 200
    }).add({
        targets: '.items,.items1',
        easing: 'easeInCubic',
        duration: 1500,
        opacity: 0.8,
        scale: function () {
            return [anime.random(2.5, 4.5), anime.random(0.5, 0.8)]
        }
    }).add({
        targets: '.items,.items1',
        easing: 'easeOutCubic',
        translateY: function () {
            return anime.random(wrapperHeight / 2, wrapperHeight)
        },
        duration: 800,
        opacity: 0.8,
        scale: {
            value: 0,
            delay: 500
        }

    })
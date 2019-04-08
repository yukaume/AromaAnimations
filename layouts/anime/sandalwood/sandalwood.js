const sandalwood = document.querySelector('#sandalwood');
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items1', 35));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = sandalwood.clientWidth;
const wrapperHeight = sandalwood.clientHeight;
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
            duration: 10,
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [wrapperHeight - itemsHeight * 2, wrapperHeight - itemsHeight * 2],
            opacity: [0, 0]
        },
        0
    )
    .add({
        targets: '.items,.items1',
        opacity: [1, 1],
        easing: 'easeInQuint',
        duration: 600,
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: function () {
            return anime.random(0.5, 3.5)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuint',
        duration: 1200,
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: function () {
            return anime.random(0.5, 3)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuint',
        duration: 600,
        translateX: function () {
            return anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: function () {
            return anime.random(0.2, 4)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuint',
        duration: 1200,
        translateX: function () {
            return anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3);
        },
        translateY: function () {
            return anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3);
        },
        scale: function () {
            return anime.random(0.5, 3)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInExpo',
        duration: 700,
        delay: anime.stagger(6),
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        opacity: 0
    })
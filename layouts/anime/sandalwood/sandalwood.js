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
            return anime.random(0.5, 1.5)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuint',
        duration: 800,
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: function () {
            return anime.random(0.5, 2)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuint',
        duration: 600,
        translateX: function () {
            return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        scale: function () {
            return anime.random(0.2, 2.5)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInQuint',
        duration: 1200,
        translateX: function () {
            return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
        },
        translateY: function () {
            return anime.random(itemsHeight * 2, wrapperHeight - itemsHeight * 2);
        },
        scale: function () {
            return anime.random(0.4, 3)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInExpo',
        duration: 600,
        delay: anime.stagger(6),
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        opacity: 0
    })
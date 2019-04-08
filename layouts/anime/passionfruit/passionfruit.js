const passionfruit = document.querySelector('#passionfruit');
passionfruit.insertAdjacentHTML('afterbegin', htmlCreater('items', 5));
passionfruit.insertAdjacentHTML('afterbegin', htmlCreater('items1', 55));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = passionfruit.clientWidth;
const wrapperHeight = passionfruit.clientHeight;
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
            duration: 10,
            easing: 'linear',
            translateX: [
                wrapperWidth / 4 - itemsWidth / 2,
                wrapperWidth / 4 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            scale: [0.5, 0.5]
        },
        0
    )
    .add({
            targets: '.items1',
            duration: 10,
            easing: 'linear',
            translateX: [
                (wrapperWidth / 4) * 3 - itemsWidth / 2,
                (wrapperWidth / 4) * 3 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            scale: [0.5, 0.5]
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 600,
        easing: 'easeInExpo',
        scale: function () {
            return anime.random(0.8, 4.5)
        }
    })
    .add({
        targets: '.items,.items1',
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2,
        scale: function () {
            return anime.random(1, 5)
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 800,
        delay: anime.stagger(4),
        rotateX: 1080,
        rotateY: 1080,
        filter: 'blur(25px)',
        scale: function () {
            return anime.random(0.8, 6)
        }
    })
    .add({
        targets: '.items,.items1',
        delay: anime.stagger(3),
        duration: 1000,
        easing: 'steps(6)',
        filter: 'blur(0px)',
    }).add({
        targets: '.items,.items1',
        delay: anime.stagger(3),
        duration: 500,
        scale: 0
    });
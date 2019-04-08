const neroli = document.querySelector('#neroli');
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items', 20));
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items1', 20));
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items2', 20));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = neroli.clientWidth;
const wrapperHeight = neroli.clientHeight;
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
    targets: '.items,.items1,.items2',
    easing: 'easeOutSine',
    opacity: 0.7,
    loop: true,
    background: ['linear-gradient(to top left,#FFDF3D,#FFFFE6,#FFFFE6,#FFBE3D)', 'linear-gradient(to top left,#FFDF3D,#FFFFE6,#FFFFE6,#FFBE3D)']
});
tl.add({
            targets: '.items',
            duration: 300,
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [wrapperHeight / 4, wrapperHeight / 4],
            scale: [0, 1]
        },
        0
    )
    .add({
            targets: '.items1',
            duration: 500,
            translateX: [
                wrapperWidth / 4 - itemsWidth / 3,
                wrapperWidth / 4 - itemsWidth / 3
            ],
            translateY: [
                wrapperHeight / 4 + wrapperHeight / 3,
                wrapperHeight / 4 + wrapperHeight / 3
            ],
            scale: [0, 1]
        },
        0
    )
    .add({
            targets: '.items2',
            duration: 500,
            translateX: [
                wrapperWidth / 4 + wrapperWidth / 2.8 + itemsWidth / 2,
                wrapperWidth / 4 + wrapperWidth / 2.8 + itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 4 + wrapperHeight / 3,
                wrapperHeight / 4 + wrapperHeight / 3
            ],
            scale: [0, 1]
        },
        0
    )
    .add({
            targets: '.items,.items1,.items2',
            duration: 800,
            easing: 'easeOutSine',
            translateX: wrapperWidth / 2 - itemsWidth / 2,
            translateY: wrapperHeight / 2 - itemsHeight / 2,
            borderRadius: '0%',
            scale: 5,
        }, 200

    )
    .add({
        targets: '.items,.items1,.items2',
        rotateZ: anime.stagger(5),
        scale: 7,
        delay: anime.stagger(3)
    })
    .add({
        targets: '.items,.items1,.items2',
        duration: 1500,
        borderRadius: '50%',
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth);
        },
        translateY: function () {
            return anime.random(itemsWidth, wrapperHeight);
        },

        scale: 0,

    });
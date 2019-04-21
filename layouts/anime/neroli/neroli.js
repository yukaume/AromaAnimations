const neroli = document.querySelector('#neroli');
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items', 8));
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items1', 8));
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items2', 8));
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items3', 8));
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items4', 8));
neroli.insertAdjacentHTML('afterbegin', htmlCreater('items5', 8));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const items4 = document.querySelector('.items4');
const items5 = document.querySelector('.items5');
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
    targets: '.items,.items1,.items2,.items3,.items4,.items5',
    easing: 'easeOutCubic',
    opacity: 0.8,
    loop: true,
    background: ['linear-gradient(to top left,#FFDD33,#FFFFE6,#FFFFE6,#FFBE3D)', 'linear-gradient(to top left,#FFDD33,#FFFFE6,#FFFFE6,#FFBE3D)']
});
tl.add({
            targets: '.items,.items1,.items2,.items3,.items4,.items5',
            duration: 10,
            easing: 'easeOutCubic',
            translateX: function () {
                return [anime.random(0, wrapperWidth - itemsWidth / 2), anime.random(0, wrapperWidth - itemsWidth / 2)];
            },
            translateY: function () {
                return [anime.random(0, wrapperHeight - itemsHeight / 2), anime.random(0, wrapperHeight - itemsHeight / 2)];
            },
            scale: [0, 1],
            rotateZ: 540
        },
        0
    )

    .add({
        targets: '.items,.items1,.items2,.items3,.items4,.items5',
        easing: 'easeInSine',
        duration: 600,
        scale: 2,
        rotateZ: -540
    })
    .add({
        targets: '.items,.items1,.items2,.items3,.items4,.items5',
        easing: 'easeInSine',
        duration: 250,
        translateX: function () {
            return anime.random(0, wrapperWidth - itemsWidth / 2)
        }
    })
    .add({
        targets: '.items,.items1,.items2,.items3,.items4,.items5',
        easing: 'easeInSine',
        duration: 800,
        scale: 1,
        rotateZ: 1080
    })
    .add({
        targets: '.items,.items1,.items2,.items3,.items4,.items5',
        easing: 'easeInSine',
        duration: 600,
        scale: 3,
        rotateZ: -540
    })
    .add({
        targets: '.items,.items1,.items2,.items3,.items4,.items5',
        easing: 'easeInSine',
        duration: 250,
        translateX: function () {
            return anime.random(0, wrapperWidth - itemsWidth / 2)
        }
    })
    .add({
        targets: '.items,.items1,.items2,.items3,.items4,.items5',
        easing: 'easeInSine',
        duration: 800,
        scale: 0,
        rotateZ: 1080
    })
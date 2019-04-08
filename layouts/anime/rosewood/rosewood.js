const rosewood = document.querySelector('#rosewood');
rosewood.insertAdjacentHTML('afterbegin', htmlCreater('items', 35));
rosewood.insertAdjacentHTML('afterbegin', htmlCreater('items1', 40));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = rosewood.clientWidth;
const wrapperHeight = rosewood.clientHeight;
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
})

tl.add({
            targets: '.items',
            duration: 10,
            translateX: function () {
                return anime.random(itemsWidth, wrapperWidth - itemsWidth);
            },
            translateY: function () {
                return anime.random(itemsHeight, wrapperHeight - itemsHeight);
            },
            opacity: [0, 0.8],
            background: 'linear-gradient(#8C2300,#CC998F,#8C2300)'
        },
        0
    )
    .add({
            targets: '.items1',
            duration: 10,
            translateX: function (el, i) {
                return anime.random(itemsWidth, wrapperWidth - itemsWidth);
            },
            translateY: function (el, i) {
                return anime.random(itemsHeight, wrapperHeight - itemsHeight);
            },
            opacity: [0, 0.8],
            background: 'linear-gradient(#996845,#4D3422,#996845)'
        },
        0
    )
    .add({
        targets: '.items,.items1',
        duration: 800,
        translateX: function (el, i) {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth);
        },
        translateY: function (el, i) {
            return anime.random(itemsHeight, wrapperHeight - itemsHeight);
        },
        opacity: [0.8, 0.8]
    }).add({
        targets: '.items,.items1',
        duration: 800,
        rotateZ: anime.stagger([180, 1080]),
        opacity: [0.8, 0.8],
        scale: function () {
            return anime.random(0.5, 4)
        }
    }).add({
        targets: '.items,.items1',
        easing: 'easeInSine',
        duration: 1200,
        rotateZ: anime.stagger([180, 1080]),
        opacity: [0.8, 0.8],
        scale: [0, 3, 0.5, 3, 0.5, 3, 0.5, 3.5]
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeInSine',
        duration: 800,
        skewX: 90,
        opacity: 0,
    })
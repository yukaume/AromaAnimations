const bergamot = document.querySelector('#bergamot');
bergamot.insertAdjacentHTML('afterbegin', htmlCreater('items', 50));
const items = document.querySelector('.items');
const wrapperWidth = bergamot.clientWidth;
const wrapperHeight = bergamot.clientHeight;
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
    targets: '.items',
    loop: true,
    background: 'linear-gradient(#FFDF0D,#FDFFC2,#F7FF0D)'
});
tl.add({
            targets: '.items',
            easing: 'easeOutSine',
            duration: 0,
            translateX: function () {
                return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
            },
            translateY: function () {
                return anime.random(itemsWidth, wrapperWidth);
            },
            opacity: [0.9, 0.9],
            scale: [0.8, 0.8],
        },
        0
    )
    .add({
        targets: '.items',
        duration: 800,
        easing: 'easeOutSine',
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight);
        },
        skewX: 85,
    })
    .add({
        targets: '.items',
        duration: 800,
        easing: 'easeInSine',
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight);
        },
        skewX: 0,
    }).add({
        targets: '.items',
        duration: 600,
        easing: 'easeOutSine',
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight);
        },
        rotateZ: anime.stagger([180, 1080]),
        scale: anime.stagger([1, 3.5])
    }).add({
        targets: '.items',
        duration: 600,
        easing: 'easeInSine',
        translateY: function () {
            return anime.random(0, wrapperHeight - itemsHeight);
        },
        scale: 0,
        endDelay: 200
    })
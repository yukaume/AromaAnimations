const cardamon = document.querySelector('#cardamon');
cardamon.insertAdjacentHTML(
    'afterbegin',
    htmlCreater('items', 150)
);
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = cardamon.clientWidth;
const wrapperHeight = cardamon.clientHeight;
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
anime
    .timeline({
        loop: true
    })
    .add({
            targets: '.items',
            duration: 0,
            easing: 'easeInSine',
            translateX: function () {
                return [anime.random(itemsWidth, wrapperWidth - itemsWidth), anime.random(itemsWidth, wrapperWidth - itemsWidth)];
            },
            translateY: function () {
                return [anime.random(itemsHeight, wrapperHeight - itemsHeight), anime.random(itemsHeight, wrapperHeight - itemsHeight)];
            },
            scale: 1,
            opacity: [0.8, 0.8],
            background: 'linear-gradient(#808019,#B3B324,#E6E617,#E6E617,#B3B324,#808019)'
        },
        0
    )

    .add({
        targets: '.items',
        easing: 'easeOutCubic',
        duration: 800,
        scale: 2,
        delay: anime.stagger(3),
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth);
        },
        translateY: function () {
            return anime.random(itemsHeight, wrapperHeight - itemsHeight);
        },
        rotateZ: anime.stagger(5),
        borderRadius: anime.stagger([0, 50])
    })
    .add({
        targets: '.items',
        easing: 'easeOutCubic',
        delay: anime.stagger(5),
        duration: 800,
        scale: 0.8,
        translateY: function () {
            return anime.random(itemsHeight, wrapperHeight - itemsHeight);
        }
    })
    .add({
        targets: '.items',
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 200,
        scale: {
            value: 0,
            delay: anime.stagger(10)
        },
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth);
        }
    });
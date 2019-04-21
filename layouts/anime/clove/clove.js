const clove = document.querySelector('#clove');
clove.insertAdjacentHTML('afterbegin', htmlCreater('items', 150));
const items = document.querySelector('.items');
const wrapperWidth = clove.clientWidth;
const wrapperHeight = clove.clientHeight;
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
    loop: true
});
tl.add({
            targets: '.items',
            duration: 0,
            easing: 'easeInSine',
            opacity: [0.8, 0.8],
            translateX: function () {
                return [
                    anime.random(0, wrapperWidth - itemsWidth),
                    anime.random(0, wrapperWidth - itemsWidth)
                ];
            },
            translateY: function () {
                return [
                    anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                    anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
                ];
            },
            scale: anime.stagger([0.5, 0.8]),
            background: 'linear-gradient(to top left,#4D3508,#997E4D,#E6CDA1,#997E4D,#4D3508)'
        },
        0
    )

    .add({
        targets: '.items',
        easing: 'steps(10)',
        duration: 1200,
        opacity: [0.8, 0.8],
        translateX: function () {
            return [
                anime.random(0, wrapperWidth - itemsWidth),
                anime.random(0, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 1.2,
        borderRadius: '50%'
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 200,
        translateX: function () {
            return [
                anime.random(0, wrapperWidth),
                anime.random(0, wrapperWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 0.3
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 200,
        translateX: function () {
            return [
                anime.random(0, wrapperWidth),
                anime.random(0, wrapperWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 1
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 200,
        translateX: function () {
            return [
                anime.random(0, wrapperWidth),
                anime.random(0, wrapperWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 0.3
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 200,
        translateX: function () {
            return [
                anime.random(0, wrapperWidth),
                anime.random(0, wrapperWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 1
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 200,
        translateX: function () {
            return [
                anime.random(itemsWidth, wrapperWidth - itemsWidth),
                anime.random(itemsWidth, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 0.3
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 200,
        translateX: function () {
            return [
                anime.random(itemsWidth, wrapperWidth - itemsWidth),
                anime.random(itemsWidth, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 1
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 200,
        translateX: function () {
            return [
                anime.random(itemsWidth, wrapperWidth - itemsWidth),
                anime.random(itemsWidth, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 0.2
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 150,
        translateX: function () {
            return [
                anime.random(itemsWidth, wrapperWidth - itemsWidth),
                anime.random(itemsWidth, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 1.5
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 600,
        translateX: function () {
            return [
                anime.random(itemsWidth, wrapperWidth - itemsWidth),
                anime.random(itemsWidth, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2),
                anime.random(itemsHeight / 2, wrapperHeight - itemsHeight * 2)
            ];
        },
        scale: 0
    });
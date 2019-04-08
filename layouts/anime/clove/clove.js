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
                    anime.random(itemsWidth, wrapperWidth - itemsWidth),
                    anime.random(itemsWidth, wrapperWidth - itemsWidth)
                ];
            },
            translateY: function () {
                return [
                    anime.random(itemsHeight, wrapperHeight - itemsHeight),
                    anime.random(itemsHeight, wrapperHeight - itemsHeight)
                ];
            },
            scale: anime.stagger([0.5, 0.7]),
            background: 'linear-gradient(to top left,#4D3508,#997E4D,#E6CDA1,#997E4D,#4D3508)'
        },
        0
    )

    .add({
        targets: '.items',
        easing: 'easeInSine',
        duration: 1500,
        opacity: [0.8, 0.8],
        translateX: function () {
            return [
                anime.random(itemsWidth, wrapperWidth - itemsWidth),
                anime.random(itemsWidth, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
            ];
        },
        scale: 3,
        borderRadius: '50%'
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
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
            ];
        },
        scale: 0.5
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
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
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
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
            ];
        },
        scale: 0.5
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
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
            ];
        },
        scale: 1
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
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
            ];
        },
        scale: 0.5
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
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
            ];
        },
        scale: 2
    })
    .add({
        targets: '.items',
        easing: 'linear',
        duration: 800,
        translateX: function () {
            return [
                anime.random(itemsWidth, wrapperWidth - itemsWidth),
                anime.random(itemsWidth, wrapperWidth - itemsWidth)
            ];
        },
        translateY: function () {
            return [
                anime.random(itemsHeight, wrapperHeight - itemsHeight),
                anime.random(itemsHeight, wrapperHeight - itemsHeight)
            ];
        },
        scale: 0
    });
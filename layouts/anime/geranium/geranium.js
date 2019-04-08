const geranium = document.querySelector('#geranium');
geranium.insertAdjacentHTML(
    'afterbegin',
    htmlCreater('items', 200)
);
const items = document.querySelector('.items');
const wrapperWidth = geranium.clientWidth;
const wrapperHeight = geranium.clientHeight;
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
    background: ['linear-gradient(#FC2119,#FFC6C4)', 'linear-gradient(#FC2119,#FFC6C4)'],
    loop: true
});
tl.add({
            targets: '.items',
            duration: 1000,
            easing: 'easeOutQuad',
            opacity: [0.9, 0.9],
            translateX: function () {
                return [
                    anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2),
                    anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2)
                ];
            },
            translateY: function () {
                return [
                    anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3),
                    anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3)
                ];
            },
            scaleY: anime.stagger([1.2, 0.6]),
            borderRadius: anime.stagger([50, 0]),
            rotateZ: anime.stagger([0, 180]),
        },
        0
    )

    .add({
        targets: '.items',
        duration: 1000,
        easing: 'easeOutQuad',
        translateX: function () {
            return [anime.random(itemsWidth, wrapperWidth - itemsWidth)];
        },
        translateY: function () {
            return [
                anime.random(
                    itemsHeight - itemsHeight - itemsHeight,
                    wrapperHeight + itemsHeight + itemsHeight
                )
            ];
        },
        rotateZ: 540,
        skew: 40

    })

    .add({
        targets: '.items',
        duration: 1200,
        easing: 'easeInQuad',
        translateX: function () {
            return [anime.random(itemsWidth, wrapperWidth - itemsWidth)];
        },
        translateY: function () {
            return [
                anime.random(
                    itemsHeight - itemsHeight - itemsHeight,
                    wrapperHeight + itemsHeight + itemsHeight
                )
            ];
        },
        opacity: {
            value: 0,
            delay: 200
        },
        rotateZ: -540,
        scale: 5,
        skew: -80
    });
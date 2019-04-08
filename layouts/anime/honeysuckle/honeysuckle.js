const honeysuckle = document.querySelector('#honeysuckle');
honeysuckle.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
honeysuckle.insertAdjacentHTML('afterbegin', htmlCreater('items1', 30));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = honeysuckle.clientWidth;
const wrapperHeight = honeysuckle.clientHeight;
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
            easing: 'easeOutCirc',
            duration: 800,
            translateX: function () {
                return anime.random(itemsWidth / 2, wrapperWidth - itemsWidth / 2);
            },
            translateY: function () {
                return anime.random(itemsHeight / 2, wrapperHeight - itemsHeight / 2);
            },
            background: 'linear-gradient(#EFD9FF,#D499FF,#EFD9FF)',
            rotateZ: 360,
            opacity: [0.8, 0.7]
        },
        0
    )
    .add({
            targets: '.items1',
            easing: 'easeOutCirc',
            duration: 800,
            translateX: function () {
                return anime.random(itemsWidth / 2, wrapperWidth - itemsWidth / 2);
            },
            translateY: function () {
                return anime.random(itemsHeight / 2, wrapperHeight - itemsHeight / 2);
            },
            background: 'linear-gradient(#FFC800,#FFE68C,#FFC800)',
            rotateZ: 360,
            opacity: [0.7, 0.8]
        },
        0
    )

    .add({
        targets: '.items,.items1',
        easing: 'easeInOutCirc',
        duration: 1000,
        easing: 'easeOutCirc',
        scale: function () {
            return anime.random(1, 4);
        },
        translateX: function () {
            return anime.random(itemsWidth / 2, wrapperWidth - itemsWidth / 2);
        },
        translateY: function () {
            return anime.random(itemsHeight / 2, wrapperHeight - itemsHeight / 2);
        }
    })

    .add({
        targets: '.items,.items1',
        duration: 1200,
        translateX: function () {
            return anime.random(itemsWidth / 2, wrapperWidth - itemsWidth / 2);
        },
        translateY: function () {
            return anime.random(itemsHeight / 2, wrapperHeight - itemsHeight / 2);
        },
        easing: 'easeOutCirc',
        scale: [7, 0]
    });
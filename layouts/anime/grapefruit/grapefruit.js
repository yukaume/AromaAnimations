const grapefruit = document.querySelector('#grapefruit');
grapefruit.insertAdjacentHTML('afterbegin', htmlCreater('grapefruitItem', 30));
const grapefruitItem = document.querySelector('.grapefruitItem');
const wrapperWidth = grapefruit.clientWidth;
const wrapperHeight = grapefruit.clientHeight;
const itemsWidth = grapefruitItem.clientWidth;
const itemsHeight = grapefruitItem.clientHeight;
var countW = (wrapperWidth - itemsWidth * 4) / 3;
var countH = wrapperHeight - itemsHeight;

function htmlCreater(className, number) {
    let html = '';
    for (let i = 0; i < number; i++) {
        html += `<div class ="${className}"></div>`;
    }
    return html;
}
const itemsBorder = '15px';
anime
    .timeline({
        targets: '.grapefruitItem',
        loop: true
    })
    .add({
        targets: '.grapefruitItem',
        duration: 0,
        background: 'linear-gradient(#FFF419,#FFFC9C,#FFFDD9,#F7FF9C,#FFFF5C)',
        opacity: [0.7, 0.7],
        translateX: [
            wrapperWidth / 2 - itemsWidth / 2,
            wrapperWidth / 2 - itemsWidth / 2
        ],
        translateY: [
            wrapperHeight / 2 - itemsHeight / 2,
            wrapperHeight / 2 - itemsHeight / 2
        ],
        scale: 15
    })
    .add({
        targets: '.grapefruitItem',
        duration: 800,
        easing: 'easeOutCubic',
        scale: 0.5
    })
    .add({
        targets: '.grapefruitItem',
        duration: 800,
        easing: 'easeOutExpo',
        translateX: function () {
            return anime.random(itemsWidth, wrapperWidth - itemsWidth);
        },
        translateY: function () {
            return anime.random(itemsHeight * 4, wrapperHeight - itemsHeight * 4);
        },
        rotateZ: anime.stagger(10),
        scale: 8
    })
    .add({
            targets: '.grapefruitItem',
            duration: 800,
            easing: 'easeOutQuint',
            rotateZ: 1080,
            scale: 8,
            skew: {
                value: 50,
                delay: 600
            }
        },
        '-=200'
    )
    .add({
        targets: '.grapefruitItem',
        duration: 800,
        easing: 'easeOutQuint',
        skew: -50,
        scale: 1
    })
    .add({
        targets: '.grapefruitItem',
        duration: 1200,
        easing: 'easeOutQuint',
        skew: 90,
        scale: 13
    })
    .add({
        targets: '.grapefruitItem',
        duration: 400,
        easing: 'easeOutQuint',
        skew: 90,
        scale: 13,
        rotateZ: 1080,
        opacity: 0
    });
const rose = document.querySelector('#rose');
rose.insertAdjacentHTML('afterbegin', htmlCreater('seed', 1));
rose.insertAdjacentHTML('afterbegin', htmlCreater('grItems', 25));
rose.insertAdjacentHTML('afterbegin', htmlCreater('grItems1', 25));
rose.insertAdjacentHTML('afterbegin', htmlCreater('grItems2', 25));
const seed = document.querySelector('.seed');
const grItems = document.querySelector('.grItems');
const grItems1 = document.querySelector('.grItems1');
const grItems2 = document.querySelector('.grItems2');
const wrapperWidth = rose.clientWidth;
const wrapperHeight = rose.clientHeight;
const itemsWidth = grItems.clientWidth;
const itemsHeight = grItems.clientHeight;
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
        loop: true
    })
    .add({
        targets: '.seed',
        easing: 'easeOutSine',
        duration: 1000,
        translateX: [
            wrapperWidth / 2 - itemsWidth / 2,
            wrapperWidth / 2 - itemsWidth / 2
        ],
        translateY: [itemsHeight * 4, wrapperHeight / 2 + itemsHeight * 10],
        backgroundColor: ['#00A661', '#00A661'],
        scale: [3, 3],
        opacity: {
            value: [0.8, 0],
            delay: 600
        }
    })
    .add({
            targets: '.grItems',
            duration: 900,
            delay: 100,
            opacity: [0.8, 0.8],
            translateX: [
                wrapperWidth / 2 - itemsWidth * 7,
                wrapperWidth / 2 - itemsWidth * 7
            ],
            translateY: [
                wrapperHeight / 2 - itemsWidth * 3,
                wrapperHeight / 2 - itemsWidth * 3
            ],
            easing: 'easeOutCubic',
            scale: function (el, i) {
                return [0, i / 1.4];
            },
            rotateZ: function (el, i) {
                return 0 + i * 35;
            }
        },
        1000
    )
    .add({
            targets: '.grItems2',
            duration: 900,
            opacity: [0.8, 0.8],
            translateX: [
                wrapperWidth / 2 + itemsWidth * 5,
                wrapperWidth / 2 + itemsWidth * 5
            ],
            translateY: [
                wrapperHeight / 2 - itemsWidth,
                wrapperHeight / 2 - itemsWidth
            ],
            easing: 'easeOutCubic',
            scale: function (el, i) {
                return [0, i / 1.3];
            },
            rotateZ: function (el, i) {
                return 0 - i * 40;
            }
        },
        1250
    )
    .add({
            targets: '.grItems1',
            duration: 900,
            opacity: [0.8, 0.8],
            translateX: [
                wrapperWidth / 2 - itemsWidth * 4,
                wrapperWidth / 2 - itemsWidth * 4
            ],
            translateY: [
                wrapperHeight / 2 + itemsWidth * 7,
                wrapperHeight / 2 + itemsWidth * 7
            ],
            easing: 'easeOutCubic',
            scale: function (el, i) {
                return [0, i / 1.4];
            },
            rotateZ: function (el, i) {
                return 0 + i * 40;
            }
        },
        1400
    )
    .add({
        targets: '.grItems,.grItems1,.grItems2',
        duration: 900,
        easing: 'easeOutExpo',
        rotateZ: function (el, i) {
            return i * 35;
        },
        filter: {
            value: 'blur(2px)',
            delay: 500
        }
    })
    .add({
            targets: '.grItems,.grItems1,.grItems2',
            duration: 600,
            easing: 'easeInSine',
            scale: 0
        },
        '-=200'
    );
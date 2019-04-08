const immortelle = document.querySelector('#immortelle');
immortelle.insertAdjacentHTML('afterbegin', htmlCreater('items', 50));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = immortelle.clientWidth;
const wrapperHeight = immortelle.clientHeight;
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
    easing: 'easeOutSine',
    loop: true,
    background: ['linear-gradient(to top left,#FFD919,#FFEFBF,#FFDD78,#FFEFBF,#FFD919)', 'linear-gradient(to top left,#FFD919,#FFEFBF,#FFDD78,#FFEFBF,#FFD919)']
});
tl.add({
            targets: '.items',
            duration: 300,
            easing: 'easeInQuart',
            translateX: [
                wrapperWidth / 2 - itemsWidth / 2,
                wrapperWidth / 2 - itemsWidth / 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            opacity: 0.7
        },
        0
    )
    .add({
        targets: '.items',
        duration: 1200,
        easing: 'easeInOutQuint',
        delay: anime.stagger(10),
        keyframes: [{
                translateY: anime.random(0, wrapperHeight)
            },
            {
                translateX: anime.random(0, wrapperWidth)
            },
            {
                translateY: anime.random(0, wrapperHeight)
            },
            {
                translateX: anime.random(0, wrapperWidth)
            },
            {
                translateY: anime.random(0, wrapperHeight)
            },
            {
                translateY: anime.random(0, wrapperHeight)
            },
            {
                translateX: anime.random(0, wrapperWidth)
            }
        ],
        borderRadius: function () {
            return anime.random(20, 50);
        },
        scale: function () {
            return anime.random(0.5, 3);
        }
    })
    .add({
        targets: '.items',
        easing: 'easeInCubic',
        endDelay: 200,
        rotateZ: 540,
        duration: 1000,
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2
    })
    .add({
        targets: '.items',
        easing: 'easeOutCubic',
        duration: 1000,
        scale: 10,
        opacity: {
            value: 0,
            delay: 700
        },
        delay: anime.stagger(8)
    });
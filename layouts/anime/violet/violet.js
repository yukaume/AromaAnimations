const violette = document.querySelector('#violette');
violette.insertAdjacentHTML('afterbegin', htmlCreater('gvItems', 50));
const items = document.querySelector('.gvItems');
const wrapperWidth = violette.clientWidth;
const wrapperHeight = violette.clientHeight;
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
        targets: '.gvItems',
        duration: 0,
        easing: 'easeOutSine',
        translateX: [
            wrapperWidth / 2 - itemsWidth / 2,
            wrapperWidth / 2 - itemsWidth / 2
        ],
        translateY: [
            wrapperHeight / 2 - itemsHeight / 2,
            wrapperHeight / 2 - itemsHeight / 2
        ],
        rotateZ: 90,
        scale: 3,
        opacity: [0.8, 0.8],
        background: 'linear-gradient(to top left,#5947B3,#A398D9,#E2D2F7,#B398D9,#A191F2)',
        borderRadius: '50%'
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutSine',
        duration: 900,
        rotateZ: 1080,
        scale: 15
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutQuint',
        duration: 150,
        scale: 1
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutQuint',
        duration: 150,
        scale: 12
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutQuint',
        duration: 150,
        scale: 1
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutQuint',
        duration: 150,
        scale: 10
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutQuint',
        duration: 150,
        scale: 1
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutExpo',
        duration: 150,
        scale: 8
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutExpo',
        duration: 300,
        scale: 1
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutExpo',
        duration: 800,
        scale: 1.5,
        borderRadius: '0%',
        translateX: function () {
            return anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3);
        },
        translateY: function () {
            return anime.random(itemsHeight * 2, wrapperHeight - itemsHeight * 2);
        },
        rotateZ: anime.stagger([10, 360])
    })
    .add({
        targets: '.gvItems',
        easing: 'easeOutExpo',
        duration: 800,
        scale: 5,
        opacity: 0,
        rotateZ: anime.stagger([-360, 360])

    });
const basil = document.querySelector('#basil');
basil.insertAdjacentHTML('afterbegin', htmlCreater('items', 10));
basil.insertAdjacentHTML('afterbegin', htmlCreater('items1', 10));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = basil.clientWidth;
const wrapperHeight = basil.clientHeight;
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
    targets: '.items,.items1',
    loop: true,
    background: 'linear-gradient(to top left,#CCFFCC,#99FF99,#00E600,#B3FFDF,#00D97E)',
});
tl.add({
            targets: '.items,.items1',
            duration: 0,
            translateX: function () {
                return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
            },
            translateY: anime.stagger([itemsWidth * 2, wrapperHeight - itemsWidth * 2]),
            opacity: [0.9, 0.9],
            scale: 1,
            rotateZ: anime.stagger([20, 300]),

        },
        0
    )
    .add({
        targets: '.items,.items1',
        easing: 'easeOutQuad',
        translateX: function () {
            return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 2);
        },
        translateY: anime.stagger([itemsWidth * 2, wrapperHeight - itemsWidth * 2]),
        duration: 1200,
        borderRadius: '50%',
        scaleX: [2.5, -2.5],
        scaleY: [-3.5, 3.5]
    })

    .add({
        targets: '.items,.items1',
        easing: 'easeInSine',
        duration: 2000,
        scale: [2, 0.5, 2],
        rotateZ: anime.stagger([30, 180])
    })
    .add({
        targets: '.items,.items1',
        translateX: function () {
            return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 4);
        },
        translateY: anime.stagger([itemsWidth * 2, wrapperHeight - itemsWidth * 4]),
        easing: 'easeInSine',
        duration: 800,
        scale: 2,
        opacity: 0
    });
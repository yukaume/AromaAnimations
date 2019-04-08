const oakmoss = document.querySelector('#oakmoss');
oakmoss.insertAdjacentHTML('afterbegin', htmlCreater('items', 60));
oakmoss.insertAdjacentHTML('afterbegin', htmlCreater('items1', 60));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const wrapperWidth = oakmoss.clientWidth;
const wrapperHeight = oakmoss.clientHeight;
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
    easing: 'easeOutSine',
    background: ['linear-gradient(to top left,#B1FF33,#E2FFB3,#317000)', 'linear-gradient(to top left,#B1FF33,#E2FFB3,#317000)']
});
tl.add({
        targets: '.items,.items1',
        duration: 1500,
        translateX: function (el, i) {
            return [anime.random(itemsWidth * 3, wrapperWidth - itemsWidth * 3), anime.random(itemsWidth, wrapperWidth - itemsWidth)];
        },
        translateY: function (el, i) {
            return [anime.random(itemsHeight * 3, wrapperHeight - itemsHeight * 3), anime.random(itemsHeight, wrapperHeight - itemsHeight)];
        },

        scale: function () {
            return anime.random(0.5, 3)
        }
    })
    .add({
        targets: '.items,.items1',
        duration: 300,
        delay: 200,
        easing: 'easeInOutQuint',
        opacity: 0.4
    })
    .add({
        targets: '.items,.items1',
        duration: 2000,
        rotateZ: 2000,
        filter: 'blur(15px)',
        scale: 0
    });
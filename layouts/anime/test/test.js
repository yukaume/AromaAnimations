const sandalwood = document.querySelector('#sandalwood');
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items1', 35));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items2', 30));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items3', 35));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items4', 30));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items5', 35));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items6', 30));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items7', 35));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items8', 30));
sandalwood.insertAdjacentHTML('afterbegin', htmlCreater('items9', 35));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const items2 = document.querySelector('.items2');
const items3 = document.querySelector('.items3');
const items4 = document.querySelector('.items4');
const items5 = document.querySelector('.items5');
const items6 = document.querySelector('.items6');
const items7 = document.querySelector('.items7');
const items8 = document.querySelector('.items8');
const items9 = document.querySelector('.items9');
const wrapperWidth = sandalwood.clientWidth;
const wrapperHeight = sandalwood.clientHeight;
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
    easing: 'easeOutSine',
    loop: true
});
tl.add({
        targets: '.items,.items1',
        duration: 10,
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(0, wrapperHeight);
        },
        opacity: [1, 1],
        scale: function () {
            return anime.random(0.5, 1.5)
        }
    },
    0
)
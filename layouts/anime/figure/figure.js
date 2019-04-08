const figure = document.querySelector('#figure');
figure.insertAdjacentHTML('afterbegin', htmlCreater('gnItems', 1));
figure.insertAdjacentHTML('beforeend', htmlCreater('gnItems1', 1));
figure.insertAdjacentHTML('beforeend', htmlCreater('gnItems2', 1));
const items = document.querySelector('.gnItems');
const items1 = document.querySelector('.gnItems1');
const items2 = document.querySelector('.gnItems2');
const items3 = document.querySelector('.gnItems3');
const wrapperWidth = figure.clientWidth;
const wrapperHeight = figure.clientHeight;
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
            targets: '.gnItems',
            duration: 600,
            easing: 'easeOutQuad',
            translateX: [
                wrapperWidth / 2 - itemsWidth * 6,
                wrapperWidth / 2 - itemsWidth * 6
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight * 4,
                wrapperHeight / 2 - itemsHeight * 4
            ],
            scale: [0, 7],
            opacity: [0.8, 0.8],
            background: 'linear-gradient(#A63F3A,#E68E8A,#FAD6D4,#E68E8A)'
        },
        0
    )
    .add({
        targets: '.gnItems1',
        duration: 300,
        delay: 200,
        easing: 'easeOutQuad',
        translateX: [
            wrapperWidth / 2 + itemsWidth * 3.5,
            wrapperWidth / 2 + itemsWidth * 3.5
        ],
        translateY: [
            wrapperHeight / 2 - itemsHeight / 2,
            wrapperHeight / 2 - itemsHeight / 2
        ],
        scale: [0, 7],
        opacity: [0.8, 0.8],
        background: 'linear-gradient(#E68E8A,#A63F3A,#E68E8A)',

    })
    .add({
        targets: '.gnItems2',
        duration: 300,
        easing: 'easeOutQuad',
        translateX: [
            wrapperWidth / 2 - itemsWidth * 4,
            wrapperWidth / 2 - itemsWidth * 4
        ],
        translateY: [
            wrapperHeight / 2 + itemsHeight * 5,
            wrapperHeight / 2 + itemsHeight * 5
        ],
        scale: [0, 7],
        opacity: [0.8, 0.8],
        background: 'linear-gradient(#A63F3A,#E68E8A,#FAD6D4)',

    })

    .add({
        targets: '.gnItems,.gnItems1,.gnItems2',
        duration: 1200,
        easing: 'easeOutQuad',
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2,
        opacity: 1,
        scale: 14,
        filter: {
            value: 'blur(8px)',
            delay: 700
        }
    })
    .add({
        targets: '.gnItems,.gnItems1,.gnItems2',
        duration: 800,
        easing: 'easeOutQuad',
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2,
        opacity: 0,
        scale: 2,
        filter: 'blur(15px)',

    })
const figure = document.querySelector('#figure');
figure.insertAdjacentHTML('afterbegin', htmlCreater('gnItems', 1));
figure.insertAdjacentHTML('beforeend', htmlCreater('gnItems1', 1));
figure.insertAdjacentHTML('beforeend', htmlCreater('gnItems2', 1));
figure.insertAdjacentHTML('beforeend', htmlCreater('gnItems3', 1));
figure.insertAdjacentHTML('beforeend', htmlCreater('gnItems4', 1));
const items = document.querySelector('.gnItems');
const items1 = document.querySelector('.gnItems1');
const items2 = document.querySelector('.gnItems2');
const items3 = document.querySelector('.gnItems3');
const items4 = document.querySelector('.gnItems4');
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
                wrapperWidth / 6,
                wrapperWidth / 6
            ],
            translateY: [
                wrapperHeight / 10,
                wrapperHeight / 10
            ],
            scale: [0, 5],
            opacity: [0.8, 0.8],
            background: ['linear-gradient(#A63F3A,#E68E8A,#FAD6D4,#E68E8A)', 'linear-gradient(#A63F3A,#E68E8A,#FAD6D4,#E68E8A)']
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
            wrapperHeight / 10,
            wrapperHeight / 10
        ],
        scale: [0, 6],
        opacity: [0.9, 0.9],
        background: ['linear-gradient(to top left,#E68E8A,#A63F3A,#E68E8A)', 'linear-gradient(to top left,#E68E8A,#A63F3A,#E68E8A)'],

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
        scale: [0, 5],
        opacity: [0.8, 0.8],
        background: ['linear-gradient(#A63F3A,#E68E8A,#FAD6D4)', 'linear-gradient(#A63F3A,#E68E8A,#FAD6D4)'],

    })
    .add({
            targets: '.gnItems3',
            duration: 300,
            easing: 'easeOutQuad',
            translateX: [
                wrapperWidth / 1.2,
                wrapperWidth / 1.2
            ],
            translateY: [
                wrapperHeight / 1.5,
                wrapperHeight / 1.5
            ],
            scale: [0, 6],
            opacity: [0.9, 0.9],
            background: ['linear-gradient(to top left,#A63F3A,#E68E8A,#FAD6D4,#FAD6D4,#E68E8A)', 'linear-gradient(to top left,#A63F3A,#E68E8A,#FAD6D4,#FAD6D4,#E68E8A)']
        },

    )
    .add({
            targets: '.gnItems4',
            duration: 300,
            easing: 'easeOutQuad',
            translateX: [
                wrapperWidth / 10,
                wrapperWidth / 10
            ],
            translateY: [
                wrapperHeight - wrapperHeight / 2,
                wrapperHeight - wrapperHeight / 2
            ],
            scale: [0, 5],
            opacity: [0.8, 0.8],
            background: ['linear-gradient(#E68E8A,#A63F3A,#E68E8A)', 'linear-gradient(#E68E8A,#A63F3A,#E68E8A)']

        },

    )

    .add({
        targets: '.gnItems,.gnItems1,.gnItems2,.gnItems3,.gnItems4',
        duration: 1200,
        easing: 'easeOutQuad',
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2,
        opacity: 1,
        scale: 8,
        filter: {
            value: 'blur(10px)',
            delay: 800
        },
        background: 'linear-gradient(#9E0800,#A63F3A,#9E0800)'

    })
    .add({
        targets: '.gnItems,.gnItems1,.gnItems2,.gnItems3,.gnItems4',
        duration: 400,
        easing: 'easeOutQuad',
        translateX: wrapperWidth / 2 - itemsWidth / 2,
        translateY: wrapperHeight / 2 - itemsHeight / 2,
        opacity: 0,
        scale: 2,

    })
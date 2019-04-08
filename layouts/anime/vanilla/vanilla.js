const vanilla = document.querySelector('#vanilla');
vanilla.insertAdjacentHTML('afterbegin', htmlCreater('gveItems', 35));
vanilla.insertAdjacentHTML('beforeend', htmlCreater('gveItems1', 35));
const gveItems = document.querySelector('.gveItems');
const gveItems1 = document.querySelector('.gveItems1');
const wrapperWidth = vanilla.clientWidth;
const wrapperHeight = vanilla.clientHeight;
const itemsWidth = gveItems.clientWidth;
const itemsHeight = gveItems.clientHeight;
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
            targets: '.gveItems',
            duration: 300,
            easing: 'steps(8)',
            translateX: [wrapperWidth / 2 - itemsWidth / 2, wrapperWidth / 2 - itemsWidth / 2],
            translateY: [wrapperHeight / 2 - itemsHeight / 2, wrapperHeight / 2 - itemsHeight / 2],
            background: 'linear-gradient(#E6C993,#FFF2D9,#E6C993,#FFEED9,#A88D6C)',
            scale: [4, 4],
            opacity: 0.8
        },
        0
    )
    .add({
            targets: '.gveItems1',
            duration: 300,
            easing: 'steps(8)',
            translateX: [wrapperWidth / 2 - itemsWidth / 2, wrapperWidth / 2 - itemsWidth / 2],
            translateY: [wrapperHeight / 2 - itemsHeight / 2, wrapperHeight / 2 - itemsHeight / 2],
            background: 'linear-gradient(#A88D6C,#E6C993,#FFF2D9,#E6C993,#A88D6C)',
            scale: [4, 4],
            opacity: 0.8
        },
        0
    )

    .add({
        targets: ['.gveItems', '.gveItems1'],
        easing: 'easeInQuad',
        duration: 1500,
        scale: 10,
        filter: 'blur(10px)',

    })
    .add({
        targets: ['.gveItems', '.gveItems1'],
        easing: 'easeOutQuad',
        duration: 300,
        scale: 1,
        filter: 'blur(0px)',

    })
    .add({
        targets: ['.gveItems', '.gveItems1'],
        duration: 1000,
        easing: 'easeOutQuad',
        translateX: function () {
            return anime.random(itemsWidth * 2, wrapperWidth - itemsWidth * 3)
        },
        translateY: function () {
            return anime.random(itemsHeight * 2, wrapperHeight - itemsHeight * 3)

        },
    })
    .add({
        targets: ['.gveItems', '.gveItems1'],
        easing: 'easeOutQuad',
        duration: 800,
        scale: 5,
        filter: 'blur(10px)',
        opacity: 0

    })
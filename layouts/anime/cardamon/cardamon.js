const cardamon = document.querySelector('#cardamon');
cardamon.insertAdjacentHTML(
    'afterbegin',
    htmlCreater('items', 200)
);
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = cardamon.clientWidth;
const wrapperHeight = cardamon.clientHeight;
const itemsWidth = items.clientWidth;
const itemsHeight = items.clientHeight;

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
            targets: '.items',
            duration: 0,
            easing: 'easeInSine',
            translateX: function () {
                return [anime.random(0, wrapperWidth - itemsWidth), anime.random(0, wrapperWidth - itemsWidth)];
            },
            translateY: function () {
                return [anime.random(itemsHeight, wrapperHeight - itemsHeight), anime.random(itemsHeight, wrapperHeight - itemsHeight)];
            },
            scale: 0.5,
            borderRadius: anime.stagger([0, 80]),
            opacity: [0.8, 0.8],
            background: 'linear-gradient(#808019,#B3B324,#E6E617,#E6E617,#B3B324,#808019)'
        },
        0
    )

    .add({
        targets: '.items',
        easing: 'easeInCubic',
        duration: 800,
        scale: 1,
        delay: anime.stagger(3),
        translateX: function () {
            return anime.random(0, wrapperWidth);
        },
        translateY: function () {
            return anime.random(itemsHeight, wrapperHeight - itemsHeight);
        },
        rotateZ: anime.stagger(15),
        borderRadius: anime.stagger([0, 80])
    })
    .add({
        targets: '.items',
        easing: 'easeInCubic',
        duration: 200,
        scale: 0.3,
    })
    .add({
        targets: '.items',
        easing: 'easeOutCubic',
        duration: 200,
        scale: 1,
    })
    .add({
        targets: '.items',
        easing: 'easeInCubic',
        delay: anime.stagger(5),
        duration: 600,
        scale: 0.8,
        rotateZ: anime.stagger(10),
        translateY: function () {
            return anime.random(itemsHeight, wrapperHeight - itemsHeight * 2);
        }
    })
    .add({
        targets: '.items',
        easing: 'easeInCubic',
        duration: 1000,
        rotateZ: anime.stagger(30),
        scale: {
            value: 0,
            delay: anime.stagger(2)
        },
        translateX: function () {
            return anime.random(0, wrapperWidth);
        }
    });
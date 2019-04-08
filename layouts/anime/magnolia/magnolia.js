const magnolia = document.querySelector('#magnolia');
magnolia.insertAdjacentHTML('afterbegin', htmlCreater('guitems', 50));
const guitems = document.querySelector('.guitems');
const wrapperWidth = magnolia.clientWidth;
const wrapperHeight = magnolia.clientHeight;
const itemsWidth = guitems.clientWidth;
const itemsHeight = guitems.clientHeight;
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
            targets: '.guitems',
            easing: 'easeOutCubic',
            opacity: 0.8,
            duration: 1200,
            background: 'linear-gradient(#FFFF73,#FFFFBF,#FFFFCC,#FFD9DC,#FF99A1)',
            translateX: [
                wrapperWidth / 2 + itemsWidth * 2,
                wrapperWidth / 2 - itemsWidth * 2
            ],
            translateY: [
                wrapperHeight / 2 - itemsHeight / 2,
                wrapperHeight / 2 - itemsHeight / 2
            ],
            rotateZ: anime.stagger([360, -360]),
            skewX: anime.stagger(0.3),
            skewY: anime.stagger(0.2),
            scale: function () {
                return anime.random(4, 12);
            },
            borderRadius: '50%',
            delay: anime.stagger(8)
        },
        0
    )
    .add({
            targets: '.guitems',
            easing: 'easeOutCubic',
            duration: 1200,
            translateX: function () {
                return anime.random(
                    wrapperWidth / 2 + itemsWidth * 9,
                    wrapperWidth / 2 - itemsWidth * 9
                );
            },
            translateY: function () {
                return anime.random(
                    wrapperHeight / 2 - itemsHeight * 9,
                    wrapperHeight / 2 + itemsHeight * 9
                );
            },
            scale: function () {
                return anime.random(4, 10);
            }
        },
        '-=300'
    )
    .add({
            targets: '.guitems',
            easing: 'easeOutCubic',
            duration: 900,
            rotateZ: function () {
                return anime.random(-540, 540);
            },
            translateX: function () {
                return anime.random(
                    wrapperWidth / 2 + itemsWidth * 7,
                    wrapperWidth / 2 - itemsWidth * 7
                );
            },
            translateY: function () {
                return anime.random(
                    wrapperHeight / 2 - itemsHeight * 7,
                    wrapperHeight / 2 + itemsHeight * 7
                );
            }
        },
        '-=150'
    )
    .add({
        targets: '.guitems',
        easing: 'easeOutCubic',
        duration: 800,
        scale: 14,
        opacity: {
            value: 0,
            delay: 650
        }
    });
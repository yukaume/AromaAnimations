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
            duration: 1600,
            background: 'linear-gradient(#FFFF73,#FFFFBF,#FFFFCC,#FFD9DC,#FF99A1)',
            translateX: [
                wrapperWidth / 2 + itemsWidth * 3,
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
                return anime.random(1, 8);
            },
            borderRadius: '50%',
            delay: anime.stagger(7)
        },
        0
    )
    .add({
            targets: '.guitems',
            easing: 'easeOutCubic',
            duration: 1200,
            translateX: function () {
                return anime.random(
                    wrapperWidth / 2 + itemsWidth * 12,
                    wrapperWidth / 2 - itemsWidth * 12
                );
            },
            translateY: function () {
                return anime.random(
                    wrapperHeight / 2 - itemsHeight * 12,
                    wrapperHeight / 2 + itemsHeight * 12
                );
            },
            scale: function () {
                return anime.random(1, 6);
            }
        },
        '-=300'
    )
    .add({
            targets: '.guitems',
            easing: 'easeOutCubic',
            duration: 1600,
            rotateZ: function () {
                return anime.random(-800, 800);
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
        '-=100'
    )
    .add({
        targets: '.guitems',
        easing: 'easeOutCubic',
        duration: 1200,
        scale: function () {
            return anime.random(5, 10);
        },
        opacity: {
            value: 0,
            delay: 800
        }
    });
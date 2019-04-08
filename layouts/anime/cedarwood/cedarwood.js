const cedarwood = document.querySelector('#cedarwood');
cedarwood.insertAdjacentHTML('afterbegin', htmlCreater('items', 30));
cedarwood.insertAdjacentHTML('afterbegin', htmlCreater('items1', 30));
const items = document.querySelector('.items');
const items1 = document.querySelector('.items1');
const wrapperWidth = cedarwood.clientWidth;
const wrapperHeight = cedarwood.clientHeight;
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
    loop: true
});
tl.add({
            targets: '.items,.items1',
            easing: 'easeOutSine',
            duration: 0,
            translateX: function () {
                return anime.random(itemsWidth, wrapperWidth - itemsWidth);
            },
            translateY: function () {
                return anime.random(itemsHeight * 2.5, wrapperHeight - itemsHeight * 2.5);
            },
            opacity: [0.8, 0.8]
        },
        0
    )
    .add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 600,
        borderRadius: anime.stagger([50, 0]),
        scaleY: function () {
            return anime.random(0.3, 1.5)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 200,
        scaleX: function () {
            return anime.random(0.8, 3.5)
        },
        scaleY: function () {
            return anime.random(0.8, 3.5)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        delay: 100,
        duration: 300,
        borderRadius: anime.stagger([50, 0]),
        scaleX: function () {
            return anime.random(0.8, 3.5)
        },
        scaleY: function () {
            return anime.random(0.2, 1.5)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 200,
        scaleX: function () {
            return anime.random(0.8, 3.5)
        },
        scaleY: function () {
            return anime.random(1.5, 3.5)
        }
    }).add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 200,
        scaleX: function () {
            return anime.random(0.8, 3.5)
        },
        scaleY: function () {
            return anime.random(1.5, 3.5)
        }
    }).add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 200,
        scaleX: function () {
            return anime.random(0.8, 3.5)
        },
        scaleY: function () {
            return anime.random(1.5, 3.5)
        }
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 250,
        skew: anime.stagger([-90, 90]),
        scale: 4
    }).add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 250,
        skew: 0,
        scale: 1
    })
    .add({
        targets: '.items,.items1',
        easing: 'easeOutSine',
        duration: 200,
        scale: 0,
        endDelay: 300
    });
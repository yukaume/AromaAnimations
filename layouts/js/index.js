 document.addEventListener('DOMContentLoaded', () => {
     const target = document.querySelector('.js-randomText')
     const chars = [...'abcdefghijklmnopqrstuvwxyz12345']
     let limit = 80
     let count = 0
     loop()

     function loop() {
         if (count < limit) {
             count++
             setText(target, shaffuleText('AROMA ANIMATIONS', chars))
             requestAnimationFrame(loop)
         } else {
             setText(target, 'AROMA ANIMATIONS')
         }
     }
 })


 function setText(target, text) {
     target.textContent = text
 }

 function shaffuleText(text, chars) {
     let textNum = text.length
     let randomText = ''
     for (let i = 0; i < textNum; i++) {
         randomText += chars[Math.floor(Math.random() * chars.length)]
     }
     return randomText
 }


 const logoname = document.querySelector('#index-logoname p');
 const wrapper = document.querySelector('#index-wrapper');
 logoname.classList.add('name')
 //  wrapper.insertAdjacentHTML('afterbegin', htmlCreater('items', 10))
 //  wrapper.insertAdjacentHTML('afterbegin', htmlCreater('items1', 10))
 //  wrapper.insertAdjacentHTML('afterbegin', htmlCreater('items2', 10))

 function htmlCreater(className, num) {
     var html;
     for (let i = 0; i < num; i++) {
         html += `<div class="${className}"></div>`
     }
     return html;
 }

 const wrapperWidth = wrapper.clientWidth;
 const wrapperHeight = wrapper.clientHeight;
 console.log(wrapperWidth)


 logoname.addEventListener('click', function () {
     logoScale()
 });

 function logoScale() {
     anime({
         targets: '.name',
         easing: 'steps(10)',
         duration: 500,
         scale: function () {
             return [anime.random(0.2, 1.5), 1]
         },
         rotateZ: function () {
             return [anime.random(0, 2160), 0]
         }
     })
 }
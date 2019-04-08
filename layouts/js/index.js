 document.addEventListener('DOMContentLoaded', () => {
     const target = document.querySelector('.js-randomText')
     const chars = [...'abcdefghijklmnopqrstuvwxyz']
     let limit = 100
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
const Links = document.querySelector('.links'),
      closeBtn = document.querySelector('.close__icon'),
      openBtn = document.querySelector('.dashboard__icon')

      openBtn.addEventListener('click', function(){
         Links.classList.add('show')
      })
      closeBtn.addEventListener('click', function(){
         Links.classList.remove('show')
      })


const home = document.getElementById('glass'),
title = document.getElementById('max-width__title')
home.addEventListener('mousemove', function(e){
   
    let axeX = (window.innerWidth /2 - e.pageX) / 20
    let axeY = (window.innerWidth /2 - e.pageY) / 20

    home.style.transform= `rotateX(${axeX}deg) rotateY(${axeY}deg)`

})

home.addEventListener('mouseenter', function(e){
    home.style.transform= `none`
    // title.style.transform = "translateX(100px)"
     title.style.transform = "scale(1.2)"
})

home.addEventListener('mouseleave', function(e){

    home.style.transform= `rotateX(0deg) rotateY(0deg)`
    // title.style.transform = "translateX(0px)"
    title.style.transform = "scale(1)"
})

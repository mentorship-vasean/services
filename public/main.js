var header = document.querySelector("header")

window.addEventListener("scroll", function(e) {
    let currentScroll = window.pageYOffset
    if (currentScroll >= 46) {
        header.style.backgroundColor = 'rgba(37, 43, 66, .9)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
    console.log('this is our event target', window.pageYOffset, currentScroll)
})





console.log('this is main.js !!!!', header)


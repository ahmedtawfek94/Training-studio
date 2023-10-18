let listGallery = document.querySelectorAll(".gallery-list .imges")
let mainGallery = document.querySelector(".main-gallery img")
let title = document.querySelector(".main-gallery h3")
listGallery.forEach(gallery =>{
    gallery.onclick = () =>{
        listGallery.forEach(imges => imges.classList.remove('active'))
        gallery.classList.add('active')
        if(gallery.classList.contains('active')){
            let src =gallery.children[0].getAttribute('src')
            mainGallery.src = src;
            let text = gallery.children[1].innerHTML
            title.innerHTML = text
        }
    }
})










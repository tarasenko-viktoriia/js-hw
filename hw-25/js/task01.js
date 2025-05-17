"use strict"
// Використовуючи один з АРІ 
//https://github.com/public-apis/public-apis#animals
//та функцію fetch організувати завантаження та відображення даних
//Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки. Окремо клас, який буде робити запити і повертати результати.

class ImageRender{
   render (src){
      const container = document.querySelector(".container")
      const img = document.createElement("img")
      img.src = src
      img.className = "img-block"
      container.append(img)
   }
}

class ImageFetch{
   constructor(url){
      this.url = url
   }

   async getImage() {
      try {
         const response = await fetch(this.url)
         const imageUrl = response.url
         const renderer = new ImageRender()
         renderer.render(imageUrl)
      } catch (error) {
         console.error(error)
      }
   }
}
const imgFetch = new ImageFetch("https://cataas.com/cat")
imgFetch.getImage()
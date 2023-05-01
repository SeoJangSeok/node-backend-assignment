const images = ['0.jpeg', '1.jpeg', '2.jpeg'] // 이미지 array 생성.

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img')

bgImage.src = `./img/${chosenImage}`
// bgImage.src = "./img/" + chosenImage

document.body.appendChild(bgImage)

var text = document.getElementById("title")
var chars = text.innerText.replace("\xa0", ).split("")
var currentChar = 1
text.innerText = chars[0]
var done = false

let key = setInterval(() => {
    text.innerText += chars[currentChar].replace(" ", "\xa0")
    currentChar += 1
    if (currentChar == chars.length) {
        clearInterval(key)
        done = true
    }
}, 150)
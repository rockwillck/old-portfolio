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

let speed = 7.5
window.onload = function() {
    var anchors = document.getElementsByTagName('button');
    for(var i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        if (anchor.innerText.includes("..")) {
            href = anchor.innerText.split("..")[2]
            anchor.innerText = anchor.innerText.split("..")[1]
        }
        anchor.onclick = function() {
            if (href.startsWith("\#")) {
                let time = 0
                console.log(getComputedStyle(document.body).scrollBehavior)
                if (getComputedStyle(document.body).scrollBehavior == 'smooth'){
                    window.scrollBy({
                        top: (document.getElementById(href.replace("\#", "").trim()).getBoundingClientRect().top - anchor.getBoundingClientRect().top + window.innerHeight/2), 
                        left: 0, 
                        behavior: 'smooth' 
                    });
                    } else {
                    let key2 = setInterval(() => {
                        if (time < (document.getElementById(href.replace("\#", "").trim()).getBoundingClientRect().top - anchor.getBoundingClientRect().top + window.innerHeight/2 - speed)/speed) {
                            window.scrollBy({
                                top: speed, 
                                left: 0, 
                                behavior: 'smooth' 
                            });
                            time ++
                        } else {
                            if (!window.location.includes(href)) {
                                window.location = window.location + href
                            }
                            clearInterval(key2)
                        }
                    }, 1)
                    }
            }
        }
    }
}
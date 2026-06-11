const button = document.getElementById('bog') 
const span = document.getElementById('span')
let likes = 0;
button.addEventListener('click', function(){
    button.innerText = 'click'
    likes = likes +1
    span.innerText = likes
})
button.addEventListener('mouseleave', function(){
    button.innerText = 'dog pet'
})

const button1 = document.getElementById('gog') 
const span1 = document.getElementById('span1')
let likes1 = 0;
button1.addEventListener('click', function(){
    button1.innerText = 'click'
    likes1 = likes1 +1
    span1.innerText = likes1
})
button1.addEventListener('mouseleave', function(){
    button1.innerText = 'dog pet'
})

const button2 = document.getElementById('bob') 
const span2 = document.getElementById('span2')
let likes2 = 0;
button2.addEventListener('click', function(){
    button2.innerText = 'click'
    likes2 = likes2 +1
    span2.innerText = likes2
})
button2.addEventListener('mouseleave', function(){
    button2.innerText = 'dog pet'
})

const button3 = document.getElementById('dog')
const span3 = document.getElementById('span3')
let likes3 = 0;
button3.addEventListener('click', function(){
    button3.innerText = 'click two times'
    likes3 = likes3 +1
    span3.innerText = likes3
    
})
button3.addEventListener('dblclick', function(){
    button3.innerText = 'dog pet'
})

const toggle = document.getElementById('toggle')

toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')

    if (document.body.classList.contains('dark-mode')) {
        toggle.innerText = 'dark'
    } else {
        toggle.innerText = 'light'
    }
})
function checkAnswear (number){
    const resulte = document.getElementById('resulte')
    if (number == 1){
        resulte.innerText = 'corect'
        resulte.style.color = 'green'
    } else {
        resulte.innerText = 'incorect'
        resulte.style.color = 'red'
    }
}

function checkAnswearSimba (number){
    const resulte1 = document.getElementById('resulte1')
    if (number == 2){
        resulte1.innerText = 'corect'
        resulte1.style.color = 'green'
    } else {
        resulte1.innerText = 'incorect'
        resulte1.style.color = 'red'
    }
}
function checkAnswearChapik (number){
    const resulte2 = document.getElementById('resulte2')
    if (number == 3){
        resulte2.innerText = 'corect'
        resulte2.style.color = 'green'
    } else {
        resulte2.innerText = 'incorect'
        resulte2.style.color = 'red'
    }
}
function checkAnswearMarc (number){
    const resulte3 = document.getElementById('resulte3')
    if (number == 4){
        resulte3.innerText = 'corect'
        resulte3.style.color = 'green'
    } else {
        resulte3.innerText = 'incorect'
        resulte3.style.color = 'red'
    }
}
function playSoundMarc (number){
    let audioChange = ""
    if (number ==1){
        audioChange = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
    } else if (number ==2){ 
        audioChange = "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    } else {
        audioChange = "https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg"
    }
    if (audioChange !== "") {
        const audio = new Audio(audioChange);
        audio.play(); 
    }
}
function playSoundBoba (number){
    let audioChange = ""
    if (number ==1){
        audioChange = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
    } else if (number ==2){ 
        audioChange = "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    } else {
        audioChange = "https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg"
    }
    if (audioChange !== "") {
        const audio = new Audio(audioChange);
        audio.play(); 
    }
}
function playSoundChapik (number){
    let audioChange = ""
    if (number ==1){
        audioChange = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
    } else if (number ==2){ 
        audioChange = "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    } else {
        audioChange = "https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg"
    }
    if (audioChange !== "") {
        const audio = new Audio(audioChange);
        audio.play(); 
    }
}
function playSoundSimba (number){
    let audioChange = ""
    if (number ==1){
        audioChange = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
    } else if (number ==2){ 
        audioChange = "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    } else {
        audioChange = "https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg"
    }
    if (audioChange !== "") {
        const audio = new Audio(audioChange);
        audio.play(); 
    }
}
function screem (number){
    let misbtn = ""
    if (number ==1){
        misbtn = document.getElementById('photo').style.display = 'none';
    } else { 
        misbtn = document.getElementById('photo').style.display = 'block';
        audioChange = "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
        const audio = new Audio(audioChange);
        audio.play();   
    }
}
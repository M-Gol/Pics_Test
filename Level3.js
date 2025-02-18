const photos = ["фотки\\аксесуары\\баскетбольный мяч.png",
    'фотки\\аксесуары\\воллейбольный мяч.png',
    'фотки\\аксесуары\\зонт.png',
    'фотки\\аксесуары\\ключи.png',
    'фотки\\аксесуары\\кружка.png',
    'фотки\\аксесуары\\футбольный мяч.png',
    'фотки\\аксесуары\\чемодан.png',
    'фотки\\вещи\\ваза.png',
    'фотки\\вещи\\зеркало.png',
    'фотки\\вещи\\комод.png',
    'фотки\\вещи\\крест.png',
    'фотки\\вещи\\молоток.png',
    'фотки\\вещи\\скалка.png',
    'фотки\\вещи\\стул.png',
    'фотки\\деньги\\два рубля.png',
    'фотки\\деньги\\десять копеек.png',
    'фотки\\деньги\\десять рублей.png',
    'фотки\\деньги\\копейка.png',
    'фотки\\деньги\\пять рублей.png',
    'фотки\\деньги\\пятьдесят копеек.png',
    'фотки\\деньги\\рубль.png',
    'фотки\\животные\\белка.png',
    'фотки\\животные\\кот.png',
    'фотки\\животные\\пес.png',
    'фотки\\животные\\лев.png',
    'фотки\\животные\\кролик.png',
    'фотки\\животные\\панда.png',
    'фотки\\животные\\слон.png',
    'фотки\\овощи\\баклажан.png',
    'фотки\\овощи\\капуста.png',
    'фотки\\овощи\\огурец.png',
    'фотки\\овощи\\горох.png',
    'фотки\\овощи\\перец.png',
    'фотки\\овощи\\томат.png',
    'фотки\\овощи\\тыква.png',
    'фотки\\фрукты\\апельсин.png',
    'фотки\\фрукты\\гранат.png',
    'фотки\\фрукты\\яблоко.png',
    'фотки\\фрукты\\банан.png',
    'фотки\\фрукты\\манго.png',
    'фотки\\фрукты\\киви.png',
    'фотки\\шапки\\белая.png',
    'фотки\\шапки\\берет.png',
    'фотки\\шапки\\ковбойская.png',
    'фотки\\шапки\\красная.png',
    'фотки\\шапки\\новогодняя.png',
    'фотки\\шапки\\поварская.png',
    'фотки\\шапки\\черная.png',
    'фотки\\фрукты\\Вишня.png',
    ]


function CompareImg(button) {
    if (pictureBox.includes(button.src)) {
        button.src = 'фотки\\Да Нет\\Да.png'
        if (YesCount <= 4) {
            YesCount++
        } else {
            document.getElementById('body').innerHTML = `
            <div class="ffield">
                <h1>Уровень пройден!</h1>
                <h3>Вы отметили все фотографии без ошибок, перейти на</h3>
                <button class="check"><a href='Level3.html'><h3>следующий уровень?</h3></a></button>
            </div>
            `
        }
    } else {
        button.src = 'фотки\\Да Нет\\Нет.png'
        document.getElementById('body').innerHTML = `
        <div class="ffield">   
            <h1>Упс! Ошибка</h1>
            <h3>На этом уровень закончен</h3>
            <button onclick='End()' class="check">Перейти к подведению итогов?</button>
        </div>
        `
    }
}

function End() {
    document.getElementById('body').innerHTML = `
    <div class="ffield">        
        <h1>Тестирование окончено!</h1>
        <h3>Вы прошли только два уровня. Максимально вы можете запомнить 4 картинки за раз</h3>
        <button class="check"><a href='Level1.html'><h3>Начать с начала?</h3></a></button>
    </div>
    `
}


const Check = document.getElementById('check')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const AfterBox = document.getElementById('after')
let photoBox = []
let pictureBox = []
let YesCount = 0


const phot1 = photos[Math.floor(Math.random()*49)]
photoBox.push(phot1)
let phot2 = photos[Math.floor(Math.random()*49)]
while (photoBox.includes(phot2)) {
    phot2 = photos[Math.floor(Math.random()*49)]
}
photoBox.push(phot2)
let phot3 = photos[Math.floor(Math.random()*49)]
while (photoBox.includes(phot3)) {
    phot3 = photos[Math.floor(Math.random()*49)]
}
photoBox.push(phot3)
let phot4 = photos[Math.floor(Math.random()*49)]
while (photoBox.includes(phot4)) {
    phot4 = photos[Math.floor(Math.random()*49)]
}
photoBox.push(phot4)
let phot5 = photos[Math.floor(Math.random()*49)]
while (photoBox.includes(phot5)) {
    phot5 = photos[Math.floor(Math.random()*49)]
}
photoBox.push(phot5)
let phot6 = photos[Math.floor(Math.random()*49)]
while (photoBox.includes(phot6)) {
    phot6 = photos[Math.floor(Math.random()*49)]
}
photoBox.push(phot6)

box1.innerHTML = `<img src='${phot1}' alt='Будет фотка' id='pic1'>` 
box2.innerHTML = `<img src='${phot2}' alt='Будет фотка' id='pic2'>`
box3.innerHTML = `<img src='${phot3}' alt='Будет фотка' id='pic3'>`
box4.innerHTML = `<img src='${phot4}' alt='Будет фотка' id='pic4'>`
box5.innerHTML = `<img src='${phot5}' alt='Будет фотка' id='pic5'>`
box6.innerHTML = `<img src='${phot6}' alt='Будет фотка' id='pic6'>`

pictureBox.push(document.getElementById('pic1').src)
pictureBox.push(document.getElementById('pic2').src)
pictureBox.push(document.getElementById('pic3').src)
pictureBox.push(document.getElementById('pic4').src)
pictureBox.push(document.getElementById('pic5').src)
pictureBox.push(document.getElementById('pic6').src)


Check.addEventListener('click', function() {
    document.getElementById('header').innerHTML = `<p>Пройдите тест, отметьте фотографии, которые сгенерировала программа</p>`
    document.getElementById('after').innerHTML = `
    <div class="table">
            <button class="cell"><img onclick='CompareImg(this)' src="фотки\\аксесуары\\баскетбольный мяч.png" alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\аксесуары\\воллейбольный мяч.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\аксесуары\\зонт.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\аксесуары\\ключи.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\аксесуары\\кружка.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\аксесуары\\футбольный мяч.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\аксесуары\\чемодан.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\вещи\\ваза.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\вещи\\зеркало.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\вещи\\комод.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\вещи\\крест.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\вещи\\молоток.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\вещи\\скалка.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\вещи\\стул.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\деньги\\два рубля.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\деньги\\десять копеек.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\деньги\\десять рублей.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\деньги\\копейка.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\деньги\\пять рублей.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\деньги\\пятьдесят копеек.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\деньги\\рубль.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\животные\\белка.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\животные\\кот.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\животные\\пес.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\животные\\лев.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\животные\\кролик.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\животные\\панда.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\животные\\слон.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\овощи\\баклажан.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\овощи\\капуста.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\овощи\\огурец.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\овощи\\горох.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\овощи\\перец.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\овощи\\томат.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\овощи\\тыква.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\фрукты\\апельсин.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\фрукты\\гранат.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\фрукты\\яблоко.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\фрукты\\банан.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\фрукты\\манго.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\фрукты\\киви.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\фрукты\\Вишня.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\шапки\\белая.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\шапки\\берет.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\шапки\\ковбойская.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\шапки\\красная.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\шапки\\новогодняя.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\шапки\\поварская.png' alt="Будет фотка"></button>
            <button class="cell"><img onclick='CompareImg(this)' src='фотки\\шапки\\черная.png' alt="Будет фотка"></button>
    </div>
    `
})
const container = document.querySelector('.container');
const pointer = document.querySelector('.pointer-container');
const text = document.querySelector('#text');
const video = document.getElementById('#video');
const totalTime = 8000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function start () {
    console.log("start pressed")
    pointer.className = 'pointer-container pointer-animation';
    return breatheAnimation();
}

function breatheAnimation (){
    text.innerHTML = 'Breath In';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out!';
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)

    setInterval(breatheAnimation, totalTime);
}




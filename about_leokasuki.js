

//music for mobile players

if (window.innerWidth <= 768) {
    const audio = new Audio('about_me_mp3,mp4/maintenance work.mp3');
    audio.loop = true;
    audio.volume = 1;
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true });
}


//togglefader
function togglefader() {
    const elements = document.querySelectorAll('.scroll-wrapper, .computer-icon');
    elements.forEach(el => {
        if (window.innerWidth <= 768) {
            el.style.display = 'none';
        } else {
            el.style.display = 'block';
        }
    });
}

togglefader();

window.addEventListener('resize', togglefader);



//Mettaton says crazy things to you
document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector(".speech-container");
const textElement = document.querySelector(".speech-text");


const introTexts = [
"HELLO AND WELCOME!",
"So.. you click on this website?",
"I'm glad that you are here"
];


const loopTexts = [
"Super idol 的笑容都沒你的甜.",
"OK GARMIN, SAVE VIDEO!",
"What color is your bugatti?",
"What's 9 + 10?",
"REMEMBER! No russian.",
"Nice Ass!"
];


const typingDuration = 1500;
const delayBeforeShow = 2000;
const delayAfterTyping = 10000;
const newAppearance = 20000;


let introUsed = false;


function showBubble(isFirst = false) {
textElement.textContent = "";


const text = !introUsed
? (introUsed = true, introTexts[Math.floor(Math.random() * introTexts.length)])
: loopTexts[Math.floor(Math.random() * loopTexts.length)];


const typingSpeed = typingDuration / text.length;


const startTyping = () => {
container.style.display = "block";


let i = 0;
const typing = setInterval(() => {
textElement.textContent += text[i++];
if (i === text.length) {
clearInterval(typing);

setTimeout(() => {
container.style.display = "none";
setTimeout(showBubble, newAppearance);
}, delayAfterTyping);
}
}, typingSpeed);
};


isFirst ? setTimeout(startTyping, delayBeforeShow) : startTyping();
}


showBubble(true);
});
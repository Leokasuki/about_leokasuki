document.querySelectorAll('.hobby .title').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.nextElementSibling;
        if(details.style.display === 'block'){
            details.style.display = 'none';
            item.textContent = item.textContent.replace('-', '+');
        } else {
            details.style.display = 'block';
            item.textContent = item.textContent.replace('+', '-');
        }
    });
});


const imageList = [
    "https://media1.tenor.com/m/wUuVjY3lpeQAAAAd/milk-chan-russia.gif",
    "https://media1.tenor.com/m/hJDnm7pDnJQAAAAd/shikanoko-nokonoko-koshitantan-shikonoko.gif",
    "https://media1.tenor.com/m/piNqUGoGJqEAAAAd/neco-arc-dilemma.gif",
    "https://media1.tenor.com/m/XuVii4d1wrQAAAAd/go-white-boy-go-nge.gif",
    "https://media1.tenor.com/m/LqdgG1SRGf0AAAAd/cirno-hatred.gif",
    "https://media1.tenor.com/m/9gosAbRjs7YAAAAd/bocchi-boc.gif",
    "https://media.discordapp.net/attachments/941399611707363399/1204138149068935198/1707099874355.gif?ex=69371f0a&is=6935cd8a&hm=00a69bd3ab7cce7f5d858783fd11445638d79b4cd47c323da02d4fbe3b92cd5c&",
    "https://cdn.discordapp.com/attachments/1343250561172111360/1346781657642045511/1334210480730291844.gif?ex=693747e9&is=6935f669&hm=b07618d78cd4f1dfb66310169b844666c83df56655e4798352d6e5472b0ddeb6&",
    "https://cdn.discordapp.com/emojis/770707949684391939.gif?v=1",
    "https://media.discordapp.net/attachments/795421457454202900/806993847355834418/image0-3.gif?ex=69373d96&is=6935ec16&hm=87126d885eb4eb9562ce60080fd6b612a6c413893c8c11e30d64597df764b1be&"
];

const container = document.getElementById("scrollContent");
container.style.visibility = "hidden";

let position = 0;
const scrollSpeed = 1;

function appendImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "100%";
    container.appendChild(img);
}

function animate() {
    position -= scrollSpeed;
    container.style.transform = `translateY(${position}px)`;

    if (Math.abs(position) >= container.scrollHeight / 2) {
        position = 0;
    }

    requestAnimationFrame(animate);
}

function preloadImages(list, callback) {
    let loaded = 0;
    const total = list.length;
    list.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
            loaded++;
            if (loaded === total) {
                callback();
            }
        };
    });
}

preloadImages(imageList, () => {
    imageList.forEach(src => appendImage(src));
    imageList.forEach(src => appendImage(src));
    container.style.visibility = "visible";
    animate();
});

if (window.innerWidth <= 768) {
    const audio = new Audio('about_me_mp3,mp4/maintenance work.mp3');
    audio.loop = true;
    audio.volume = 1;
    audio.play().catch(() => {
        console.log("Autoplay blockiert, der Nutzer muss einmal tippen");
    });
}
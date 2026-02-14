const introText = document.getElementById('intro-text');
const messageText = document.getElementById('message-text');
const garden = document.getElementById('garden');
const background = document.getElementById('background');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function startValentineAnimation() {
    await sleep(1000);

    introText.classList.remove('hidden');
    introText.classList.add('visible');

    await sleep(3000);

    introText.classList.remove('visible');
    introText.classList.add('move-up');

    await sleep(1000);

    messageText.classList.remove('hidden');
    messageText.classList.add('visible');

    await sleep(4000);

    messageText.style.transform = "translateY(-50px)";
    
    createGarden();
    startFloatingHearts();
}

function createGarden() {
    const flowercount = 3;

    for (let i = 0; i < flowercount; i++) {
        const container = document.createElement('div');
        container.classList.add('flower-container');

        const stem = document.createElement('div');
        stem.classList.add('stem');
        
        const head = document.createElement('div');
        head.classList.add('flower-head');

        const leftLeaf = document.createElement('div');
        leftLeaf.classList.add('leaf', 'left');

        const rightLeaf = document.createElement('div');
        rightLeaf.classList.add('leaf', 'right');

        stem.appendChild(leftLeaf);
        stem.appendChild(rightLeaf);
        stem.appendChild(head);
        container.appendChild(stem);
        garden.appendChild(container);

        setTimeout(() => {
            const randomHeight = Math.floor(Math.random() * 100) + 150;
            stem.style.height = `${randomHeight}px`;

            setTimeout(() => {
                head.style.transform = 'rotate(45deg) scale(1)';
                leftLeaf.style.opacity = '1';
                rightLeaf.style.opacity = '1';
            }, 2000); 

        }, i * 1500);
    }
}

function startFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 100 + "vw";

        const sizeScale = Math.random() * 0.5 + 0.5; 
        heart.style.transform = `scale(${sizeScale}) rotate(45deg)`;
        
        const duration = Math.random() * 5 + 5; 
        heart.style.animationDuration = `${duration}s`;

        background.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 400); 
}

window.onload = startValentineAnimation;
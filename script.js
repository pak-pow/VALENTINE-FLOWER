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
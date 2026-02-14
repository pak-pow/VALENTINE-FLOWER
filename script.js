window.onload = () => {
    const curtain = document.getElementById('curtain');
    const t1 = document.getElementById('t1');
    const t2 = document.getElementById('t2');
    const heartsContainer = document.getElementById('floating-hearts-container');

    // Helper function for delay
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function runSequence() {
        // 1. Initial Wait
        await wait(500);

        // 2. Show "Hi Hazel"
        t1.classList.add('fade-in');

        // 3. Wait
        await wait(2500);

        // 4. Hide "Hi Hazel"
        t1.classList.remove('fade-in');
        t1.classList.add('fade-out');

        // 5. Short pause
        await wait(500);

        // 6. Show Message
        t2.classList.add('fade-in');

        // 7. Read Message
        await wait(4500);

        // 8. Move Message Up
        t2.classList.remove('fade-in');
        t2.style.transform = 'translateY(-150px)';
        t2.style.opacity = '0.8';

        // 9. THE BIG REVEAL
        // Fade out the black curtain
        curtain.style.opacity = '0';
        
        // UNPAUSE the flower animations
        document.body.classList.remove('not-loaded');

        // START the floating hearts
        startFloatingHearts();
        

        // 10. Remove curtain from DOM so we can see clearly
        await wait(2000);
        curtain.style.display = 'none';
    }

    // Function to generate random floating hearts
    function startFloatingHearts() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');

            // Randomize size (between 10px and 25px)
            const size = Math.random() * 15 + 10;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;

            // Randomize horizontal position
            heart.style.left = Math.random() * 100 + 'vw';

            // Randomize animation speed (between 5s and 10s)
            const duration = Math.random() * 5 + 5;
            heart.style.animationDuration = `${duration}s`;

            heartsContainer.appendChild(heart);

            // Cleanup heart after animation finishes
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);

        }, 400); // Create a new heart every 400ms
    }

    runSequence();
};
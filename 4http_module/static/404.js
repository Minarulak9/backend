const searchingText = document.querySelector('.searching');
const searchPhrases = [
    'Searching for page...',
    'Looking in database...',
    'Checking backups...',
    'Scanning alternative routes...',
    'No results found'
];

let currentIndex = 0;

setInterval(() => {
    searchingText.style.opacity = 0;
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % searchPhrases.length;
        searchingText.textContent = searchPhrases[currentIndex];
        searchingText.style.opacity = 1;
    }, 500);
}, 2000);

// Add random glitch effect to 404
const errorCode = document.querySelector('.error-code');

setInterval(() => {
    if (Math.random() > 0.9) {
        errorCode.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 10}px rgba(79, 172, 254, 0.8),
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 10}px rgba(0, 242, 254, 0.8)
        `;
        
        setTimeout(() => {
            errorCode.style.textShadow = 'none';
        }, 100);
    }
}, 500);
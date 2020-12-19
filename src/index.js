import './styles.css';

const refs = {
    dayBoard: document.querySelector('[data-value="days"]'),
    hourBoard: document.querySelector('[data-value="hours"]'),
    minBoard: document.querySelector('[data-value="mins"]'),
    secBoard: document.querySelector('[data-value="secs"]'),
}

const countdownTimer = {
    start() {
        updateClockFace(0);
        const targetDate = new Date('Dec 23, 2021');
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetDate - currentTime;
            
            updateClockFace(deltaTime);
        }, 1000);
    }
    };
countdownTimer.start()

function updateClockFace(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));  
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs =pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.dayBoard.textContent = `${days}`;
    refs.hourBoard.textContent = `${hours}`;
    refs.minBoard.textContent = `${mins}`;
    refs.secBoard.textContent = `${secs}`;
    }

function pad(value) {
    return String(value).padStart(2, '0')
}
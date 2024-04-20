document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('dateInput');
    const startBtn = document.getElementById('startBtn');
    const timerElement = document.getElementById('timer');
    let countdownInterval;

    startBtn.addEventListener('click', function() {
        const targetDate = new Date(dateInput.value).getTime();
        if (!isNaN(targetDate)) {
            startCountdown(targetDate);
        } else {
            alert('Please enter a valid date');
        }
    });

    function startCountdown(targetDate) {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(updateTimer, 1000, targetDate);
        updateTimer(targetDate);
    }

    function updateTimer(targetDate) {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = 'Countdown Complete!';
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
});

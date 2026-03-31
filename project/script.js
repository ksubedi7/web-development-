document.addEventListener("DOMContentLoaded", () => {
    // Target date for next World Cup (using June 11, 2026 roughly)
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return; // Only run on home page

    const worldCupDate = new Date("June 11, 2026 00:00:00").getTime();

    // Update the countdown every second
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = worldCupDate - now;

        // Math for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display results
        document.getElementById("days").innerHTML = String(days).padStart(2, '0');
        document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

        // If countdown over
        if (distance < 0) {
            clearInterval(x);
            countdownEl.innerHTML = "<h2>The World Cup is here!</h2>";
        }
    }, 1000);
});

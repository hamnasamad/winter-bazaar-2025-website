// Event date - change as per your event
const eventDate = new Date(2026, 0, 12, 12, 0, 0).getTime(); // Dec 12, 2025 3:00 PM

// Update every second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display in HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // When countdown ends
    if(distance < 0){
        clearInterval(timer);
        document.getElementById("event-timer").innerHTML = "<h2>Event Started!</h2>";
    }

}, 1000);


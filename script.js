// script.js
// JavaScript code for portfolio interactivity

function updateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' };
    const formattedDate = now.toLocaleString('en-GB', options).replace(',', '');
    document.getElementById('current-time').innerText = formattedDate;
}

setInterval(updateTime, 1000); // Update time every second

// Additional interactivity can be added here...
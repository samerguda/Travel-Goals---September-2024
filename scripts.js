document.addEventListener("DOMContentLoaded", function() {
    const currentDateElement = document.getElementById("current-date-time");

    // Update current date and time
    function updateDateTime() {
        const now = new Date();
        const formattedDate = now.toLocaleString();
        currentDateElement.textContent = `Current Date & Time: ${formattedDate}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

function printPage() {
    window.print();
}

function copyContent() {
    const text = document.querySelector("table").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Content copied to clipboard!");
    });
}

function sendWhatsApp() {
    const text = "Here are my travel goals for September: " + document.querySelector("table").innerText;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}

function sendEmail() {
    const subject = "My Travel Goals for September";
    const body = "Here are my travel goals for September:\n\n" + document.querySelector("table").innerText;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
}

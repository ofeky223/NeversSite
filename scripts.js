document.addEventListener("DOMContentLoaded", function() {
    const serverStatusElement = document.getElementById("server-status");
    const onlinePlayersElement = document.getElementById("online-players");

    // Function to check server status and online players count
    function checkServerStatus() {
        fetch('http://123.45.67.89:30120/info.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Server is offline');
                }
            })
            .then(data => {
                serverStatusElement.textContent = "Online";
                serverStatusElement.style.color = "green";
                onlinePlayersElement.textContent = "Online Players: " + data.players.length;
            })
            .catch(error => {
                serverStatusElement.textContent = "Offline";
                serverStatusElement.style.color = "red";
                onlinePlayersElement.textContent = "Online Players: N/A";
            });
    }

    checkServerStatus();

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Message sent! We will get back to you shortly.");
    });

    // Smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const offset = target.offsetTop - (window.innerHeight / 3); // Adjusted offset to scroll slightly higher than the middle

            if (target) {
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function calculateAge() {
    const birthDate = new Date("2006-10-25T00:00:00");
    const now = new Date();
    const diff = now - birthDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeUnits = [
        { label: "Years", value: years },
        { label: "Months", value: months },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds }
    ];

    const container = document.getElementById("age-container");
    container.innerHTML = "";
    timeUnits.forEach(unit => {
        const div = document.createElement("div");
        div.classList.add("age-box");
        div.innerHTML = `${unit.value}<br>${unit.label}`;
        container.appendChild(div);
    });
}

setInterval(calculateAge, 1000);
calculateAge();

const scriptURL = "https://script.google.com/macros/s/AKfycbxicsJ-2tYSWebY3gYFA3TPb9nDF-0w5B_8ioJv6in4DrKrVkOCmxuXKq3RKvOLA4euAA/exec";

const form = document.getElementById("my-form");
const alertBox = document.getElementById("alert");

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(Response => Response.json())
    .then(data => {console.log('Success:', data);
        alertBox.textContent = "Send message success.";
        form.reset();
    })
})


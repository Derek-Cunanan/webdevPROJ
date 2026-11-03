document.addEventListener("DOMContentLoaded", function () {

    // NAVIGATION BAR
    const toggle = document.getElementById("navToggle");
    const navbar = document.getElementById("navbar");

    toggle.addEventListener("click", function () {
        navbar.classList.toggle("open");
    });

    // VEHICLE REQUEST FORM
    const requestForm = document.getElementById("vehicleRequestForm");

    requestForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const request = {
            id: "R" + Date.now(),
            destination: document.getElementById("destination").value,
            purpose: document.getElementById("purpose").value,
            vehicleType: document.getElementById("vehicleType").value,
            departureDate: document.getElementById("departureDate").value,
            departureTime: document.getElementById("departureTime").value,
            returnDate: document.getElementById("returnDate").value,
            returnTime: document.getElementById("returnTime").value,
            status: "Pending"
        };

        let requests = JSON.parse(localStorage.getItem("vehicleRequests")) || [];

        requests.push(request);

        localStorage.setItem("vehicleRequests", JSON.stringify(requests));

        alert("Your vehicle request has been saved successfully!");

        requestForm.reset();
    });

});

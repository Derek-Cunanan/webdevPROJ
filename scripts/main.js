const { request } = require("node:http");

const toggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");
const addbtn = document.getElementById("submitDriver");
const driverName = document.getElementById("driverName");
toggle.addEventListener("click", () => navbar.classList.toggle("open"));


try {
    addbtn.addEventListener("click", async (event) => {
    const response = await fetch("http://127.0.0.1:3000/api/auth/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                userName: driverName
            })
        });
    })
    const response = await fetch ("http://127.0.0.1:3000/api/vehicle/all")
    const result = await response.json();
    const vehicleList = result.vehicle;
    const vehicleTable = document.getElementById("vehicleTable").getElementsByTagName("tbody")[0];
    let availCount = 0;
    let unavailCount = 0;

    for (let i = 0; i < vehicleList.length; i++) {
        if (vehicleList[i].status === "Available") {
            availCount++;
        }
        else if (vehicleList[i].status === "Unavailable") {
            unavailCount++;
        }

        const row = vehicleTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell1.textContent = vehicleList[i].brand;
        cell2.textContent = vehicleList[i].userId.userName;
        cell3.textContent = vehicleList[i].status;
        cell4.textContent = vehicleList[i].plateNo;
    }
    document.getElementById("numUnavail").textContent = unavailCount;
    document.getElementById("numAvail").textContent = availCount;
} catch (error) {
    console.error(error);
}
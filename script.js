let workers = {};

function registerWorker() {
    const id = document.getElementById("workerId").value.trim();
    const name = document.getElementById("workerName").value.trim();
    if (!id || !name) {
        alert("Please enter both ID and name.");
        return;
    }
    if (!workers[id]) {
        workers[id] = { name: name, attendance: [] };
        alert(`Worker ${name} registered successfully.`);
    } else {
        alert("Worker ID already registered.");
    }
    document.getElementById("workerId").value = "";
    document.getElementById("workerName").value = "";
}

function logAttendance() {
    const id = document.getElementById("attendanceId").value.trim();
    const shift = document.getElementById("shift").value;
    if (!workers[id]) {
        alert("Worker ID not found. Please register first.");
        return;
    }
    const timestamp = new Date().toLocaleString();
    workers[id].attendance.push({ timestamp, shift });
    alert(`Attendance logged for ${workers[id].name}`);
    document.getElementById("attendanceId").value = "";
}

function displayReport() {
    let report = "";
    for (const [id, worker] of Object.entries(workers)) {
        report += `Worker: ${worker.name} (ID: ${id})\n`;
        worker.attendance.forEach(entry => {
            report += `  - ${entry.timestamp} | Shift: ${entry.shift}\n`;
        });
        report += "\n";
    }
    document.getElementById("report").textContent = report || "No attendance records yet.";
}

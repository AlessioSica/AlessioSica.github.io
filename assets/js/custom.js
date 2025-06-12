const currentYearSpan = document.getElementById('current-year');

function currentYear() {
    currentYearSpan.innerHTML = new Date().getFullYear().toString();
}

currentYear();
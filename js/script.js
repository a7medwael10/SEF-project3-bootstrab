var copy = document.getElementById("copy");
var copy1 = document.getElementById("copy2");
var copy2 = document.getElementById("copy3");

function alerts() {
    alert("تم نسح النص")
}

copy.onclick = alerts;
copy1.onclick = alerts;
copy2.onclick = alerts;

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

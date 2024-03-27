let count = 0;

// Decrease Function
document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById('countLabel').innerHTML = count;
};

// Reset Function
document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById('countLabel').innerHTML = count;
};

// Increase Function
document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById('countLabel').innerHTML = count;
};

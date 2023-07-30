```javascript
let isActive = false;
let startTime;
let endTime;
let totalTime = 0;

document.getElementById('startButton').addEventListener('click', startTracking);
document.getElementById('stopButton').addEventListener('click', stopTracking);

function startTracking() {
    isActive = true;
    startTime = new Date();
    chrome.runtime.sendMessage({message: 'userActive'});
}

function stopTracking() {
    isActive = false;
    endTime = new Date();
    totalTime += calculateTime(startTime, endTime);
    displayTime(totalTime);
    chrome.runtime.sendMessage({message: 'userInactive'});
}

function calculateTime(start, end) {
    return (end - start) / 1000; // returns time in seconds
}

function displayTime(time) {
    document.getElementById('displayTime').innerText = `Total Active Time: ${time} seconds`;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'updateTime') {
        if (isActive) {
            endTime = new Date();
            totalTime += calculateTime(startTime, endTime);
            startTime = endTime;
            displayTime(totalTime);
        }
    }
});

window.onload = function() {
    chrome.storage.sync.get(['userActivity'], function(result) {
        if (result.userActivity) {
            isActive = result.userActivity.isActive;
            startTime = new Date(result.userActivity.startTime);
            endTime = new Date(result.userActivity.endTime);
            totalTime = result.userActivity.totalTime;
            displayTime(totalTime);
        }
    });
}

window.onunload = function() {
    let userActivity = {
        isActive: isActive,
        startTime: startTime.toString(),
        endTime: endTime.toString(),
        totalTime: totalTime
    };
    chrome.storage.sync.set({userActivity: userActivity});
}
```
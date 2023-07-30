```javascript
let isActive = false;
let startTime;
let endTime;
let totalTime = 0;

document.onmousemove = document.onkeypress = function() {
    isActive = true;
    startTime = new Date();
};

setInterval(function() {
    if (isActive) {
        endTime = new Date();
        let seconds = Math.abs(endTime - startTime) / 1000;
        totalTime += seconds;
        isActive = false;
        chrome.runtime.sendMessage({message: 'userActive', time: totalTime});
    } else {
        chrome.runtime.sendMessage({message: 'userInactive'});
    }
}, 60000);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === 'updateTime') {
            totalTime = request.time;
        }
    }
);
```
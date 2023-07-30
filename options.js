```javascript
document.addEventListener('DOMContentLoaded', function() {
    retrieveData();
});

function retrieveData() {
    chrome.storage.sync.get(['userActivity'], function(result) {
        if(result.userActivity) {
            document.getElementById('displayTime').textContent = result.userActivity.totalTime;
            document.getElementById('breakTime').textContent = result.userActivity.breakTime;
        }
    });
}

document.getElementById('startButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({message: 'userActive'});
});

document.getElementById('stopButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({message: 'userInactive'});
});
```
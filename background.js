```javascript
let isActive = false;
let startTime = null;
let endTime = null;
let totalTime = 0;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ userActivity: {} });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'userActive') {
    isActive = true;
    startTime = new Date();
  } else if (request.message === 'userInactive') {
    isActive = false;
    endTime = new Date();
    totalTime += calculateTime(startTime, endTime);
    saveData();
  } else if (request.message === 'updateTime') {
    if (isActive) {
      endTime = new Date();
      totalTime += calculateTime(startTime, endTime);
      startTime = endTime;
      saveData();
    }
  }
});

function calculateTime(start, end) {
  return Math.abs(end - start) / 1000;
}

function saveData() {
  chrome.storage.sync.set({ userActivity: { isActive, startTime, endTime, totalTime } });
}

setInterval(() => {
  chrome.runtime.sendMessage({ message: 'updateTime' });
}, 60000);
```
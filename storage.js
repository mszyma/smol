```javascript
// storage.js

// Save user activity data
function saveData(userActivity) {
    chrome.storage.sync.set({ 'userActivity': userActivity }, function() {
        console.log('User activity data saved.');
    });
}

// Retrieve user activity data
function retrieveData(callback) {
    chrome.storage.sync.get('userActivity', function(result) {
        callback(result.userActivity);
    });
}
```
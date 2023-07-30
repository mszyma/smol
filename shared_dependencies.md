Shared Dependencies:

1. **Exported Variables**: 
    - `isActive`: Boolean variable to check if the user is active or not.
    - `startTime`: Variable to store the start time of user activity.
    - `endTime`: Variable to store the end time of user activity.
    - `totalTime`: Variable to store the total active time of the user.

2. **Data Schemas**: 
    - `userActivity`: Object to store user activity data including `isActive`, `startTime`, `endTime`, and `totalTime`.

3. **ID Names of DOM Elements**: 
    - `startButton`: Button to start tracking user activity.
    - `stopButton`: Button to stop tracking user activity.
    - `displayTime`: Element to display the total active time of the user.
    - `breakTime`: Element to display the break time of the user.

4. **Message Names**: 
    - `userActive`: Message sent when the user is active.
    - `userInactive`: Message sent when the user is inactive.
    - `updateTime`: Message sent to update the total active time.

5. **Function Names**: 
    - `startTracking`: Function to start tracking user activity.
    - `stopTracking`: Function to stop tracking user activity.
    - `calculateTime`: Function to calculate the total active time.
    - `displayTime`: Function to display the total active time on the extension.
    - `startBreak`: Function to start the break when the user is inactive.
    - `stopBreak`: Function to stop the break when the user becomes active again.
    - `saveData`: Function to save user activity data using Chrome Storage API.
    - `retrieveData`: Function to retrieve user activity data using Chrome Storage API.
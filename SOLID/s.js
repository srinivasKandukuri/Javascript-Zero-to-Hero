/*
Single Responsibility Principle (SRP):

1. Each module, class, or function should have only one reason to change.
2. In JavaScript, this means ensuring that each function or class has a single responsibility and does not take on unrelated tasks.
3. Breaking down complex functions into smaller, more focused functions can help adhere to this principle.

*/


// Separate responsibilities into different functions
async function fetchUserData() {
    const response = await fetch('https://api.example.com/user');
    return await response.json();
}

function processData(userData) {
    // Process user data
    return processedData;
}

function updateUI(data) {
    // Update UI with processed data
}

async function fetchDataAndUpdateUI() {
    const userData = await fetchUserData();
    const processedData = processData(userData);
    updateUI(processedData);
}

// Sample user activity data
const userData = {
    name: "Shree",
    stepsToday: 10500,
    caloriesBurned: 540,
    workoutCount: 3,
    recommendedWorkouts: [
        "💪 30-min Strength Training",
        "🏃 20-min HIIT Cardio",
        "🧘 15-min Yoga Stretch"
    ]
};

// Function to update user summary
function updateUserSummary() {
    const userSummary = document.querySelector(".user-summary");
    userSummary.innerHTML = `
        <h2>Hello, ${userData.name} 👋</h2>
        <p>Steps: ${userData.stepsToday.toLocaleString()} | 
        Calories Burned: ${userData.caloriesBurned} | 
        Workouts: ${userData.workoutCount}</p>
    `;
}

// Function to update activity cards
function updateActivityOverview() {
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = `
        <div class="card">🚶 Steps<br><strong>${userData.stepsToday.toLocaleString()}</strong></div>
        <div class="card">🔥 Calories<br><strong>${userData.caloriesBurned}</strong></div>
        <div class="card">🏋 Workouts<br><strong>${userData.workoutCount}</strong></div>
    `;
}

// Function to update recommended workouts
function updateRecommendations() {
    const workoutList = document.querySelector(".recommendations ul");
    workoutList.innerHTML = ""; // Clear old items

    userData.recommendedWorkouts.forEach(workout => {
        const li = document.createElement("li");
        li.textContent = workout;
        workoutList.appendChild(li);
    });
}

// Init the dashboard
function initDashboard() {
    updateUserSummary();
    updateActivityOverview();
    updateRecommendations();
}

// Call init on page load
window.onload = initDashboard;

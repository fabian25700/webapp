const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxWJ-ShjHI3JQVwMkCTnAC3O2pInXxpFL82Z4p91UwbebnP-4ervP8mFxIBcin3FhUv/exec";

function fetchGoals() {
    return fetch(GOOGLE_SCRIPT_URL)
        .then(response => response.json())
        .catch(error => {
            console.error("Fehler beim Abrufen der Ziele:", error);
            throw error;
        });
}

function toggleGoalStatus(goalId, status) {
    const params = new URLSearchParams();
    params.append("action", "toggle");
    params.append("id", goalId);
    params.append("status", status);

    return fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    });
}

function addGoal(timeframe, category, goalText, targetDate = "") {
    const params = new URLSearchParams();
    params.append("action", "add");
    params.append("timeframe", timeframe);
    params.append("category", category);
    params.append("goal_text", goalText);
    params.append("target_date", targetDate);

    return fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    });
}

function deleteGoal(goalId) {
    const params = new URLSearchParams();
    params.append("action", "delete");
    params.append("id", goalId);

    return fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    });
}

function editGoal(goalId, newText) {
    const params = new URLSearchParams();
    params.append("action", "edit");
    params.append("id", goalId);
    params.append("goal_text", newText);

    return fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    });
}

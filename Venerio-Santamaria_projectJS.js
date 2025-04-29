function generateMealPlan() {
    const email = document.getElementById("email").value;
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    const username = document.getElementById("username").value;
    const goal = document.getElementById("goal").value;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner'];

    let mealData = "<pre style='font-family: monospace'><h2>" + username + "'s Meal Plan</h2>";
    mealData += "<p>Email: " + email + "<br>Goal: " + goal + "</p><hr>";
    mealData += "<table border='1'><tr><th>Day</th><th>Breakfast</th><th>Snack 1</th><th>Lunch</th><th>Snack 2</th><th>Dinner</th></tr>";

    for (let d of days) {
        mealData += `<tr><td>${d}</td>`;
        for (let m of meals) {
            const val = document.querySelector(`[name="${d}_${m}"]`).value || '-';
            mealData += `<td>${val}</td>`;
        }
        mealData += "</tr>";
    }
    mealData += "</table></pre>";

    const win = window.open("", "_blank");
    win.document.write("<html><head><title>Meal Plan</title></head><body>");
    win.document.write(mealData);
    win.document.write("</body></html>");
    win.document.close();
}

function downloadMealPlan() {
    const email = document.getElementById("email").value;
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    const username = document.getElementById("username").value;
    const goal = document.getElementById("goal").value;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner'];

    let text = `${username}'s Weekly Meal Plan\nEmail: ${email}\nGoal: ${goal}\n\n`;

    for (let d of days) {
        text += `\n${d}:\n`;
        for (let m of meals) {
            const val = document.querySelector(`[name="${d}_${m}"]`).value || '-';
            text += `  ${m.charAt(0).toUpperCase() + m.slice(1)}: ${val}\n`;
        }
    }

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meal_plan.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

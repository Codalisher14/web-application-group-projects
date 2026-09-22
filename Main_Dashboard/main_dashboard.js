import { auth, db } from "../firebase/firebase-config.js"; 
import { 
onAuthStateChanged, 
signOut 
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js"; 
import { 
ref, 
get 
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

onAuthStateChanged(auth, async (user) => { 
if (user) { 
console.log("Logged in user:", user.uid); 
try { 
const userRef = 
ref(db, "users/" + user.uid); 
const snapshot = 
await get(userRef); 
if (snapshot.exists()) { 
const userData = 
snapshot.val(); 
console.log( 
"User data:", 
userData   ); 
 
 
                // Display username 
                document.querySelector( 
                    ".dashboard-header p" 
                ).textContent = 
                    "Welcome back, " + 
                    userData.username + "!"; 
 
            } 
 
        } catch (error) { 
 
            console.error( 
                "Error reading user data:", 
                error 
            ); 
 
        } 
 
    } 
 
    else { 
 
        // No authenticated user 
        window.location.href = 
            "../Login/login/login.html"; 
 
    } 
 
}); 

async function logout() {
    try {
        await signOut(auth);
        alert("You have been logged out.");
        window.location.href = "../Login/login/login.html";
    } catch (error) {
        console.error("Logout error:", error);
    }
}

// Make logout available to HTML onclick
window.logout = logout;

const dashboardCardContent = {
    users: {
        title: "Users",
        description: "Manage the 25 users registered in your web application."
    },
    reports: {
        title: "Reports",
        description: "Review the 12 reports available for your web application."
    },
    activities: {
        title: "Activities",
        description: "Track the latest activity across your web application."
    }
};

function selectDashboardCard(card) {
    const content = dashboardCardContent[card.dataset.dashboardCard];
    if (!content) {
        return;
    }

    document.querySelectorAll("[data-dashboard-card]").forEach((dashboardCard) => {
        dashboardCard.classList.toggle("selected", dashboardCard === card);
    });

    document.querySelector(".welcome-panel h2").textContent = content.title;
    document.querySelector(".welcome-panel p").textContent = content.description;
}

document.querySelectorAll("[data-dashboard-card]").forEach((card) => {
    card.addEventListener("click", () => selectDashboardCard(card));
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectDashboardCard(card);
        }
    });
});
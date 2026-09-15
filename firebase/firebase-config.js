import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js"; 
import { getAuth } from 
"https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js"; 
import { getDatabase } from 
"https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js"; 
// ========================================== 
// FIREBASE CONFIGURATION 
// ========================================== 
const firebaseConfig = { 
apiKey: "AIzaSyDbGQem0geDzJdfxvcSyBtUp1Giv1xlsi8", 
authDomain: "testyurinya.firebaseapp.com", 
databaseURL: 
"https://testyurinya-default-rtdb.asia-southeast1.firebasedatabase.app/", 
projectId: "testyurinya", 
storageBucket: 
"testyurinya.firebasestorage.app", 
messagingSenderId: "193682017746", 
appId: "1:193682017746:web:523a43e7f2a1698f83cc0b" 
}; 
// ========================================== 
// INITIALIZE FIREBASE 
// ========================================== 
const app = initializeApp(firebaseConfig); 
// ========================================== 
// INITIALIZE AUTHENTICATION 
// ========================================== 
const auth = getAuth(app); 
// ========================================== 
// INITIALIZE REALTIME DATABASE 
// ========================================== 
const db = getDatabase(app); 
// ========================================== 
// EXPORT 
// ========================================== 
export { app, auth, db };
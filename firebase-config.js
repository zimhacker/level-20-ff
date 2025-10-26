// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYPCEfGqVWpBUU5yZF0licd8kKoynOvQM",
  authDomain: "zim-hacker-vip-e94a7.firebaseapp.com",
  databaseURL: "https://zim-hacker-vip-e94a7-default-rtdb.firebaseio.com",
  projectId: "zim-hacker-vip-e94a7",
  storageBucket: "zim-hacker-vip-e94a7.firebasestorage.app",
  messagingSenderId: "687502534300",
  appId: "1:687502534300:web:0c6d8b72e50099402f2f59",
  measurementId: "G-4WHC41GVTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
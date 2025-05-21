import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQQ9TzlMI2Y98HCZicvBFfwWSvNs4-SHE",
  authDomain: "web-dev-project-d78b6.firebaseapp.com",
  databaseURL: "https://web-dev-project-d78b6-default-rtdb.firebaseio.com",
  projectId: "web-dev-project-d78b6",
  storageBucket: "web-dev-project-d78b6.appspot.com",
  messagingSenderId: "879567976480",
  appId: "1:879567976480:web:3dd00c977193a855d82445"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const counterRef = ref(db, "counter");

window.increment = function () {
  onValue(counterRef, (snapshot) => {
    const current = snapshot.val() ?? 0;
    set(counterRef, current + 1);
  }, { onlyOnce: true });
};

window.reset = function () {
  set(counterRef, 0);
};

window.addEventListener("DOMContentLoaded", () => {
  onValue(counterRef, (snapshot) => {
    const value = snapshot.val();
    document.getElementById("counter").innerText = value ?? 0;
  });
});
//modules to import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAvQXoWFMcp0CfV1lpNa-SrndzI9iYYoQE",
authDomain: "roysmanfohub.firebaseapp.com",
projectId: "roysmanfohub",
storageBucket: "roysmanfohub.appspot.com",
messagingSenderId: "626407670058",
appId: "1:626407670058:web:4ea3640ac9a3bcec455e53",
measurementId: "G-KB326F325K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);



/* 
*   ______    __  __   __   __
*   |     \  |  \/  | |  |_|  |
*   | |___/  |      | |       |
*   | |  \   | |\/| | |   _   |
*   |_| \_\  |_|  |_| |__| |__|
*
*/

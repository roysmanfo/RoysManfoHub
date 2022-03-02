//modules to import
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
//JS functions

function createUser(email, password) {
    
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

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('You are signed as '+email)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
    });
}

function firebaseInit() {
	// Import the functions you need from the SDKs you need
	
	//(Done in line 2,3)

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

}

function Check(){
    const email = document.getElementById("emailform").value;
    const password = document.getElementById("passwordform").value;

    let isEmailValid, isPasswordValid;
    // check for @
    var atSymbol = email.indexOf("@");
    if(atSymbol < 1){
        isEmailValid = false;
    }else{
        var dot = email.indexOf(".");
        if(dot <= atSymbol + 2) isEmailValid = false;
        else if(dot === email.length - 1)  isEmailValid = false;
        else isEmailValid = true

    }

    let re = /[a-z]\d|\d[a-z]/i;
    if(re.test(password) && password.length > 3)
        isPasswordValid = true;
    //We can show the user if he needs to change something
	if (isEmailValid && isPasswordValid) {
		//Top
		document.getElementById("TopAnim").style.background=('#42ff42');
		document.getElementById("EmailApproved").style.background=('#42ff42');
		//Bottom
		document.getElementById("BottomAnim").style.background=('#42ff42');
		document.getElementById("PassApproved").style.background=('#42ff42');
		//Auth
		firebaseInit();
		createUser(email,password);
	}else{
		if (isEmailValid) {
			document.getElementById("TopAnim").style.background=('#42ff42');
			document.getElementById("EmailApproved").style.background=('#42ff42');

		}else{
			document.getElementById("TopAnim").style.background=('#f35b5b');
			document.getElementById("EmailApproved").style.background=('#f35b5b');
		}
		if (isPasswordValid) {
			document.getElementById("BottomAnim").style.background=('#42ff42');
			document.getElementById("PassApproved").style.background=('#42ff42');
		}else{
			document.getElementById("BottomAnim").style.background=('#f35b5b');
			document.getElementById("PassApproved").style.background=('#f35b5b');
		}
	}
}

//jQuery
$(document).ready(function(){
	$("#emailform").focus(function(){
		$("#plh_one").remove()
	});
});

$(document).ready(function(){
	$(".title").on("click",function(){
        console.log('Why are you checking?')
	});
});

$(document).ready(function(){
	$("#sButton").on("click",function(){
        Check();
	});
});
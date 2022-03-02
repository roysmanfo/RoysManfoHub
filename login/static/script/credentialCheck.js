function credentialCheck(){
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
    if (isEmailValid) {
        createUser(email, password)
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

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"

function createUser(email, password) {
    

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
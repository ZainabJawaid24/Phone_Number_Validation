import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCZX1DNbvpc63B_NbWbixVcEB_cu5I4rNk",
    authDomain: "phone-number-validation-7b7cb.firebaseapp.com",
    projectId: "phone-number-validation-7b7cb",
    storageBucket: "phone-number-validation-7b7cb.firebasestorage.app",
    messagingSenderId: "343553861064",
    appId: "1:343553861064:web:e883d6a5a92d93695e0cfd",
    measurementId: "G-94PHW3VVW2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const numberInput = document.getElementById("number").value;
const sendbtn = document.getElementById("send");
sendbtn.addEventListener("click", () => {
    const appVerifier = new RecaptchaVerifier(auth, 'sendOTP',{
        'size' : 'invisible'
    });
    signInWithPhoneNumber(auth, numberInput, appVerifier)
    .then((result) => {
        window.result = result;
    })
    .catch((err) => {
         swal({
             title: "Error",
             text: "PLease give a valid phone number, Try again ❌",
             icon: "error",
             button: "Sure"
})
    })
});
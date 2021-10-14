import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC08_r_00ZX8bWbWTn8NLvinzBq0f9riQo",
    authDomain: "thundergamer-af349.firebaseapp.com",
    projectId: "thundergamer-af349",
    storageBucket: "thundergamer-af349.appspot.com",
    messagingSenderId: "1007825725147",
    appId: "1:1007825725147:web:bf490579078c1f873c4efe"
};

const app = firebase.initializeApp(firebaseConfig);

// Podemos exportar la funcion getFirebase para retornar nuestra aplicacion inicializada (usamos poco).

export function getFirebase() {
    return app
}

//ESTA ES LA QUE MAS SE VA USAR (es nuestra base de datos inicializada), Cuando yo importe getFirestore me retorna inicializada mi base de datos con esta app.

export function getFirestore() {

    return firebase.firestore(app)
}
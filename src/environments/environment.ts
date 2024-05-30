import firebase from 'firebase/app';

export const environment = {
    production: false,
    firebaseConfig:{
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    }
};

//firebase.initializeApp(environment.firebaseConfig);
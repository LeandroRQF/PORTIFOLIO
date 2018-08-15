const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyAvM8JfJd4KlJDKcsDFE7MalyEmtbTImTY",
    authDomain: "leandro-ricardo.firebaseapp.com",
    databaseURL: "https://leandro-ricardo.firebaseio.com",
    projectId: "leandro-ricardo",
    storageBucket: "leandro-ricardo.appspot.com",
    messagingSenderId: "356102286702"    
}

const app = firebase.initializeApp(FirebaseConfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage()
export const auth = app.auth()

export default config
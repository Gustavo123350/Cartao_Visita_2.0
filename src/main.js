import { createApp } from 'vue'
import { initializeApp } from "firebase/app"
import App from './App.vue'
import router from './router'

// Importe seu arquivo CSS aqui
import './assets/main.css'

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBEAiIBitAXI5YFSZ4sP6VnMeJZ_RoPGG4",
    authDomain: "cartao-visita-e2278.firebaseapp.com",
    projectId: "cartao-visita-e2278",
    storageBucket: "cartao-visita-e2278.appspot.com",
    messagingSenderId: "631166647445",
    appId: "1:631166647445:web:200214ba6db962e1ba6f9c"

}

initializeApp(firebaseConfig)


const app = createApp(App)

// Use o router Vue
app.use(router)

// Monte o aplicativo Vue no elemento com id 'app'
app.mount('#app')

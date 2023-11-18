<script>
import axios from 'axios';
import { store } from '../../data/store/store';

export default {
    name:'Contacts',

    data(){
        return{
            name: '',
            email: '',
            message: '',
            errors: {},
            // una sorta di loading per inviare una sola volta il form
            sending: false,
            success: false
        }
    },

    components:{
        
    
    },

    methods:{
        sendForm(){
            this.sending = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            axios.post(`${store.apiUrl}contacts`, data)
                .then(result => {
                    // console.log(result.data);
                    // per vedere gli errori quando invio in POST dei dati sbagliati
                    // console.log(result.data.errors);
                    this.success = result.data.success;
                    if(!result.data.success){
                        this.errors = result.data.errors;
                    }else{
                        this.errors = {};
                    }
                    this.sending = false;
                });
        }

    },
}
</script>

<template>
    <!-- <div class="container-inner d-flex flex-column align-items-center justify-content-center" style=" max-width: 90%;"> -->
    <!-- oppure con mx-auto -->
    <div class="container-inner mx-auto">

        <h2 class="mb-4 text-center">Contatti</h2>

        <div v-if="success" class="alert alert-success mt-4" role="alert">
            <h5 class="text-success p-0 m-0">Mail inviata correttamente</h5>
        </div>        

        <div class="d-flex flex-column align-items-center justify-content-center">
            <!--//* @submit.prevent="sendForm()" nel form impedisce il ricaricamento della pagina quando viene inviato e, allo stesso tempo, chiama la funzione sendForm -->
            <form @submit.prevent="sendForm()">
                <div class="mb-3" style="width: 80vw">
                    <label for="name" class="fw-bold form-label">Titolo</label>
                    <input :class="{ 'is-invalid' : errors.name }" v-model.trim="name" type="text" name="name" class="form-control" placeholder="Esempio">
                    <p v-for="(error,index) in errors.name" :key="index" class="text-danger">{{ error }}</p>
                </div>
                <div class="mb-3" style="width: 80vw">
                    <label for="email" class="fw-bold form-label">Indirizzo Email</label>
                    <input :class="{ 'is-invalid' : errors.email }" v-model.trim="email" type="email" class="form-control" name="email" placeholder="mariorossi@email.it">
                    <p v-for="(error,index) in errors.email" :key="index" class="text-danger">{{ error }}</p>
                </div>
                <div class="mb-3" style="width: 80vw">
                    <label for="message" class="fw-bold form-label">Messaggio</label>
                    <textarea :class="{ 'is-invalid' : errors.message }" v-model.trim="message" type="text" name="message" class="form-control" placeholder="Messaggio" cols="10" rows="10"></textarea>
                    <p v-for="(error,index) in errors.message" :key="index" class="text-danger">{{ error }}</p>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="sending">{{ sending ? 'Invio in corso...' : 'Invia' }}</button>
            </form>
        </div>

    </div>
</template>



<style>

</style>

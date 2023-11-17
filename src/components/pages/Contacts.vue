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
        }
    },

    components:{
        
    
    },

    methods:{
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            axios.post(`${store.apiUrl}contacts`, data)
                .then(result => {
                    console.log(result.data);
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

        <div class="d-flex flex-column align-items-center justify-content-center">
            <!--//* @submit.prevent="sendForm()" nel form impedisce il ricaricamento della pagina quando viene inviato e, allo stesso tempo, chiama la funzione sendForm -->
            <form @submit.prevent="sendForm()">
                <div class="mb-3" style="width: 80vw">
                    <label for="name" class="fw-bold form-label">Titolo</label>
                    <input v-model.trim="name" type="text" name="name" class="form-control" placeholder="Esempio">
                </div>
                <div class="mb-3" style="width: 80vw">
                    <label for="email" class="fw-bold form-label">Indirizzo Email</label>
                    <input v-model.trim="email" type="email" class="form-control" name="email" placeholder="mariorossi@email.it">
                </div>
                <div class="mb-3" style="width: 80vw">
                    <label for="message" class="fw-bold form-label">Messaggio</label>
                    <textarea v-model.trim="message" type="text" name="message" class="form-control" placeholder="Messaggio" cols="10" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>
        </div>

    </div>
</template>



<style>

</style>

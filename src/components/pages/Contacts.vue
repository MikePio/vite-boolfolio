<script>

export default {
    name:'Contacts',
    components:{
    
    }
}
</script>

<template>
    <!-- <div class="container-inner d-flex flex-column align-items-center justify-content-center" style=" max-width: 90%;"> -->
    <!-- oppure con mx-auto -->
    <div class="container-inner mx-auto">

        <h2 class="mb-4 text-center">Contatti</h2>

        <div class="d-flex flex-column align-items-center justify-content-center">
            <form>
                <div class="mb-3" style="width: 80vw">
                    <label for="title" class="fw-bold form-label">Titolo</label>
                    <input type="text" name="title" class="form-control" placeholder="Esempio">
                </div>
                <div class="mb-3" style="width: 80vw">
                    <label for="email" class="fw-bold form-label">Indirizzo Email</label>
                    <input type="email" class="form-control" name="email" placeholder="mariorossi@email.it">
                </div>
                <div class="mb-3" style="width: 80vw">
                    <label for="message" class="fw-bold form-label">Messaggio</label>
                    <textarea type="password" name="message" class="form-control" placeholder="Messaggio" cols="10" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>
        </div>

    </div>
</template>



<style>

</style>

<script>
export default {
    name:'Home'
}
</script>

<template>
    <!-- <div class="container-inner d-flex flex-column align-items-center justify-content-center" style=" max-width: 90%;"> -->
    <!-- oppure con mx-auto -->
    <div class="container-inner mx-auto">

        <h2 class="mb-4 text-center">Home</h2>

        <!-- //! MAI UTILIZZARE LE CARD DI BOOTSTRAP -->
        <!-- <div class="rounded-2 shadow p-5 m-auto"> -->
        <div class="rounded-2 shadow p-5 d-flex flex-column align-items-center justify-content-center">
            <div class="text-center">
                <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error cumque libero tenetur, dolorum sint eos magnam nihil doloribus consequuntur, nam harum laboriosam earum nemo placeat delectus adipisci quis maiores saepe est ullam quidem vel repellendus animi! Neque et dolorem dolores doloribus iste corporis assumenda dolore libero accusamus id aut velit est quibusdam ex amet sed optio natus deleniti consectetur impedit iusto, repudiandae sit, commodi officia. Ratione ea laboriosam assumenda repellat labore nemo error libero delectus velit id quos mollitia magni ipsa recusandae facere laudantium, eum quis placeat necessitatibus non harum in! Magni perspiciatis corrupti magnam accusamus aliquid. Ea, molestias nostrum temporibus ut beatae placeat maiores dolores incidunt fuga voluptatibus error soluta enim obcaecati id adipisci assumenda aperiam odit? Sunt tempore fugiat quam aliquid dolores, delectus deleniti, totam dolor voluptatibus explicabo cumque nostrum minus nobis voluptate cum earum vel incidunt tenetur inventore reprehenderit, ad error repudiandae voluptatum? Incidunt quos eaque accusamus cumque autem neque dolore commodi ipsa adipisci at minus culpa consequatur placeat vel quae aliquam tempore dicta voluptas, maiores mollitia aperiam facere recusandae saepe. Fuga dolores placeat veniam quam perferendis, non repellat totam nemo vitae sed assumenda perspiciatis cupiditate necessitatibus praesentium optio tenetur atque, nihil temporibus provident exercitationem fugiat esse itaque impedit. Animi assumenda, omnis blanditiis eligendi exercitationem incidunt eum perspiciatis culpa quasi eos nihil aperiam cum adipisci expedita vel laborum nostrum, fugiat officiis tempora vero molestiae saepe mollitia! Deserunt provident et tempora, unde quis assumenda aut molestiae fuga velit eum dolor perspiciatis tenetur? Sint officia vel odio, repudiandae corrupti est quas molestiae consectetur fuga suscipit cumque labore voluptatem fugit non adipisci facere dolore consequatur, ut laboriosam eveniet! Error hic ducimus soluta quod, cum quas dolores ut quo commodi quibusdam, beatae quae libero odit deleniti aut! Tempore sequi dolorem ipsam, facere animi minima sit officia quam voluptas odit itaque! -->
                <h5 class="mb-3">Scopri i progetti web di altri sviluppatori</h5>
                <strong>Boolfolio</strong> è una piattaforma che permette agli sviluppatori web di condividere i propri progetti con il mondo. Trova progetti di ogni genere, dalla semplice pagina web al complesso sito web aziendale.
                <h5 class="my-3">Cerca i progetti che ti interessano</h5>
                Puoi cercare i progetti per nome, per tipologia o per tecnologie utilizzate. Ad esempio, se stai cercando un sito web full-stack, puoi cercare per tipologia "full-stack".
                Oppure, se stai cercando un sito web realizzato con Laravel, puoi cercare per tecnologie "Laravel".
                <h5 class="my-3">Scopri i progetti di altri sviluppatori</h5>
                I progetti presenti su <strong>Boolfolio</strong> sono stati realizzati da sviluppatori di tutto il mondo. Scopri il lavoro di altri sviluppatori e trova ispirazione per i tuoi progetti futuri.
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.rounded-2{
    border: 0.5px solid rgba(128, 128, 128, 0.5);
}

@media screen and (min-width: 992px) {

    .container-inner{
        width: 63%;
    }
}

</style>

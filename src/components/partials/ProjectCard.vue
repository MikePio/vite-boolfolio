<script>
export default {
  name: 'ProjectCard',
  props:{
    project : Object
  },
  methods:{
    // funzione per cambiare la formattazione dell'orario in base alla posizione
    formatData(dateString){
      const d = new Date(dateString);
      // console.log(d);
      return d.toLocaleDateString();
    },
    formattedData(dateString){
        const d = new Date(dateString);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        function getUserLocale(){
            const userLocale = navigator.languages && navigator.languages.length
                            ? navigator.languages[0]
                            : navigator.language;
            return userLocale;
        }
        return d.toLocaleString(getUserLocale(), options);
    },
  },
  computed:{
    printType(){

      if(!this.project.type) return 'Nessuna tipologia';

      // scrivendo in questo modo le classi css devono essere negli stili generali (SCRIVENDO LE CLASSI E LO STYLE nei file generali IL SITO DIVENTA LENTISSIMO)
      // return `<div class="badge badge-type mb-1 me-1">${this.project.type.name}</div>`;
      return `<div>${this.project.type.name}</div>`;
    }
  },

}
</script>

<template>
        <div class="shadow bg-white border border-grey lg-overflow-hidden rounded-2 text-black my-3 ms-4 me-4" style="width: 505px; max-width: 505px; height: 232px; max-height: 232px">
          <div class="d-flex">
            <div class="d-flex flex-column d-flex justify-content-center align-items-center">
                <img 
                :src="project.image_path ? `http://127.0.0.1:8000/storage/${project.image_path}` : `src/assets/img/placeholder-img.png`"
                :alt="project.name"
                class="rounded-start" style="object-fit: cover; height: 230px; width: 280px;">
                <!-- //* funziona il placeholder statico  -->
                <!-- src='../../assets/img/placeholder-img.png' -->
            </div>
            <div class="d-flex flex-column justify-content-start mx-2" style="height: 230px; width: 225px;">
                <div class="my-2 text-start">
                  <h5 class="mb-1">
                    {{ project.name }}
                  </h5>
                  <div class="text-sm">
                    by <strong>{{ project.user.name }}</strong>
                  </div>
                  <div class="text-sm mb-1">
                    {{ formattedData(project.start_date) }} 
                  </div>
                  <p class="badge badge-type mb-1 me-1">
                    {{ project.type?.name ?? 'Nessuna tipologia' }} 
                  </p>
                  <!-- oppure utilizzando una funzione-->
                  <!-- <p class="badge badge-type mb-1 me-1" v-html="printType"></p> -->
                  <div v-if="project.technologies && project.technologies.length > 0">
                    <span class="badge badge-technology mb-1 me-1" v-for="technology in project.technologies.slice(0, 9)" :key="technology.id">&nbsp;{{ technology.name }}</span>
                  <span v-if="project.technologies.length > 9" class="fw-bold">. . .</span>
                  </div>
                  <div v-else>
                    <span class="badge badge-technology mb-1 me-1">Nessuna tecnologia</span>
                  </div>
                  <!-- <div> -->
                    <!-- {{ project.category ?? 'Nessuna categoria' }} -->
                  <!-- </div> -->
                  <!-- <div class="text-muted custom-card-text" style="width: 205px; height: 75px;"> -->
                    <!-- {{ project.description }} -->
                  <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;
.badge-type{
  // background-color: #1A1E21;
  // background-color: #212529;
  background-color: #272c31;
  // background-color: #4338CA;
}

.badge-technology{
  background-color:#bcbcbc;
  // background-color: lightgray;
}

</style>
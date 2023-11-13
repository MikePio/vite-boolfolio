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

}
</script>

<template>
        <div class="bg-white border border-dark overflow-hidden rounded-2 text-black my-3 ms-4 me-4" style="width: 460px; max-width: 460px; height: 232px; max-height: 232px">
          <div class="d-flex">
            <div class="d-flex flex-column d-flex justify-content-center align-items-center">
                <img 
                :src="project.image_path ? `http://127.0.0.1:8000/storage/${project.image_path}` : `src/assets/img/placeholder-img.png`"
                :alt="project.name"
                class="rounded-start" style="object-fit: cover; height: 232px; width: 230px;">
                <!-- //* funziona il placeholder statico  -->
                <!-- src='../../assets/img/placeholder-img.png' -->
            </div>
            <div class="d-flex flex-column justify-content-start mx-2" style="height: 232px; width: 230px;">
                <div class="my-2 text-start">
                  <h5 class="mb-1">
                    {{ project.name }}
                  </h5>
                  <p class="mb-1">
                    {{ formattedData(project.start_date) }} 
                  </p>
                  <p class="badge badge-type mb-1 me-1">
                    {{ project.type?.name ?? 'Nessuna tipologia' }} 
                  </p>
                  <div v-if="project.technologies && project.technologies.length > 0">
                    <span class="badge badge-technology mb-1 me-1" v-for="technology in project.technologies" :key="technology.id">&nbsp;{{ technology.name }}</span>
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
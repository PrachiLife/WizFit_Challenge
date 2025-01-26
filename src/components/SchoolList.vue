<template>
  <div class="school-list">
    <div class="school-list-player">
        <img src="../assets/player.png"/>
    </div>
    <school-list-card/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SchoolListCard from './SchoolListCard.vue';
export default defineComponent({
  components: { SchoolListCard },
    setup(){
        return{

        }
    }
})
</script>

<style scoped>
.school-list-player{
    display: flex;
    justify-content: center;
}
.school-list-player img {
    width: 300px;
    height: 250px;
}
@media screen and (min-width: 576px){
    .school-list-player img {
        width: 400px;
        height: 340px;
    }
}
</style>
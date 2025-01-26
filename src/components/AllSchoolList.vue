<template>
  <div class="all-school-list-container">
    <SearchInput/>
    <div class="all-school-list">
        <div></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SearchInput from "./SearchInput.vue";
export default defineComponent({
    components:{
        SearchInput,
    }
})
</script>

<style scoped>
.all-school-list-container{
    width: 300px;
}
@media screen and (min-width: 576px){
    .all-school-list-container {
        width: 450px;
    }
}
</style>
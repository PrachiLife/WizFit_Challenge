<template>
  <div class="search-input">
    <input type="text" placeholder="Search School here..."/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({

})
</script>

<style scoped>
.search-input {
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-input input{
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #8d8686;
    outline: 0px;
}
</style>
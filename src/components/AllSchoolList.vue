<template>
  <div class="all-school-list-container">
    <div class="search-input">
        <input type="text" placeholder="Search School here..." v-model="userSearch"/>
    </div>
    <div class="school-list-loading" v-if="isLoading">
        <!-- when api is loading -->
        <loader />
    </div>
    <div v-else>
        <div class="all-school-list" v-if="allSchoolDetails?.length">
            <div v-for="(schoolDetail,index) in allSchoolDetails" :key="index">
                <school-card :school-detail="schoolDetail"/>
            </div>
        </div>
        <!-- when result is empty -->
        <no-result-found v-else/>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { fetchSchoolDetails } from '../api/school';
import Loader from "./Loader.vue";
import NoResultFound from "./NoResultFound.vue";
import SchoolCard from "./SchoolCard.vue";

export default defineComponent({
    components:{
        SchoolCard,
        NoResultFound,
        Loader,
    },
    setup(){
        const allSchoolDetails = ref([]);
        const userSearch = ref('');
        const isLoading = ref(false);

        const getSchoolDetails = async ()=>{
            isLoading.value= true; //set the loader
            const response = await fetchSchoolDetails(userSearch.value);
            allSchoolDetails.value = response.school_list;
            isLoading.value = false;
        }

        const debounceSearch = (searchFn,delay) =>{
            let id;
            return function optimisedFn(...args){
                clearInterval(id);
                id= setTimeout(()=>{
                    searchFn(...args);
                }, delay)
            }
        }
        // debounce function so to call getSearchResult after 1000ms
        const debouncedGetSchoolDetails = debounceSearch(getSchoolDetails, 1000);

        watch(userSearch,()=>{
            debouncedGetSchoolDetails();
        });
        //call school details api
        getSchoolDetails();
        return {
            allSchoolDetails,
            userSearch,
            isLoading,
        }
    }
})
</script>

<style scoped>
.all-school-list-container{
    width: 300px;
}
.all-school-list{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0px;
}
.search-input {
    display: flex;
    justify-content: center;
    align-items: center;
}
.school-list-loading{
    display: flex;
    justify-content: center;
    margin: 20px 0px;
}
.search-input input{
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #8d8686;
    outline: 0px;
}
@media screen and (min-width: 576px){
    .all-school-list-container {
        width: 450px;
    }
}
</style>
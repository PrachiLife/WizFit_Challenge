<template>
  <div class="school-card">
    <div class="school-detail">
        <!-- <img :src="schoolDetail.logo_url"/> -->
        <div class="school-detail-school-name">{{ schoolDetail.school_name }}</div>
    </div>
    <div class="school-join-campaign">
        <h5>Join Campaign</h5>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
    props:{
        schoolDetail:{
            type: Object,
            default: () => ({}),
        }
    }
})
</script>

<style scoped>
.school-card{
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    background: #EFEFEF;
    border-radius: 8px;
}
.school-detail{
    display: flex;
    align-items: center;
    gap: 10px;
}
.school-join-campaign{
    border:2px solid #dd117c;
    color:#dd117c;
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
}
.school-detail-school-name{
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.school-join-campaign h5{
    margin: 0px;
}
</style>
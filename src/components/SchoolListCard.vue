<template>
  <div class="school-list-container">
    <div class="school-list-content">
        <h1 class="school-list-heading">
            Are you ready to take the challenge?
        </h1>
        <div class="school-list-download">
            <div class="school-list-download-heading">
                Download Harlem Wizards App
            </div>
            <div class="school-list-download-buttons">
                <div class="school-list-download-button">
                    <img src="../assets/google-store.png"/>
                </div>
                <div class="school-list-download-button">
                    <img src="../assets/apple-store.png"/>
                </div>
            </div>
        </div>
        <div class="sign-up-container">
            <div class="sign-up-border">
                <div class="sign-up-right-now">
                    or you can sign up right now 
                </div>
            </div>
        </div>
        <div class="all-school-list">
            <all-school-list/>
        </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import AllSchoolList from "./AllSchoolList.vue";
export default defineComponent({
    components:{
        AllSchoolList,
    }
})
</script>

<style scoped>
.school-list-container{
    display: flex;
    justify-content: center;
}
.school-list-content{
    padding: 20px 15px;
    min-width: 300px;
    border: 1px solid #E6E7E9;
    border-top: 0px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: calc(100vw - 15px);
}
.school-list-heading{
    color: #dd117c;
    margin: 0px;
    font-size: 1.3em;
    text-align: center;
}
.school-list-download{
    padding: 15px 0px;
    text-align: center;
}
.school-list-download-heading{
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 8px;
}
.school-list-download-buttons{
    display: flex;
    justify-self: center;
}
.school-list-download-button{
    width: 50%;
}
.school-list-download-button img{
    width: 150px;
    height: 65px;
}
.sign-up-border{
    border: 2px solid #F2F2F2;
    position: relative;
    width: 300px;
}
.sign-up-right-now{
    position: absolute;
    background: white;
    padding: 0px 20px;
    font-size: 12px;
    white-space: nowrap;
    font-weight: 500;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.sign-up-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.all-school-list{
    padding-top: 35px;
    display:flex;
    justify-content: center;
}
@media screen and (min-width: 576px){
    .school-list-heading{
        font-size: 1.8em;
    }
    .school-list-download-button img{
        width: 200px;
        /* height: 65px; */
    }
    .sign-up-right-now{
        padding: 0px 30px;
    }
    .sign-up-border {
        width: 450px;
    }
}
@media screen and (min-width: 850px) {
    .school-list-content{
        width: 800px;
    }
}
</style>
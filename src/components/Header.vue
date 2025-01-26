<template>
    <div class="banner">
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.banner{
    background-image:url('../assets/banner.png');
    background-repeat:no-repeat;
    background-size:cover;
    background-position:right;
    height: 200px;
}
.banner-height{
    height:200px;
}
@media only screen  and (min-width: 576px){
    .banner{
        background-position: left;
    }
}
</style>

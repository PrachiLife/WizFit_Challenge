<template>
  <div class="loader"></div>
</template>

<script>
export default {

}
</script>

<style>
.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
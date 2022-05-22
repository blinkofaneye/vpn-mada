<template>
  <div class="container">
    <img
      id="wave-layer2"
      :src="Layer2"
      alt="Waves Layer 2"
    >
    <img
      id="wave-layer1"
      :src="Layer1"
      alt="Waves Layer 1"
    >
  </div>
</template>

<script lang="ts" setup>
import Layer1 from '@/assets/svg/waves-layer1.svg';
import Layer2 from '@/assets/svg/waves-layer2.svg';
</script>

<style scoped>
.container {
    position: relative;
}

img {
    width: 100%;
    height: auto;
}

#wave-layer1 {
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>

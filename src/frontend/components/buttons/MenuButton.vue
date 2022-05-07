<script lang="ts" setup>
import Icon from '../../assets/svg/menu-button.svg';
</script>

<template>
  <button class="container">
    <img :src="Icon">
  </button>
</template>

<style lang="scss" scoped>
.container {
    background: none;
    padding: 0;
    width: 4vw;
    height: 4vw;
    cursor: pointer;
    &, &:focus {
        border-style: solid;
        border-width: 2px;
        border-color: #fff;
        border-radius: 50%;
    }
    img {
        width: 2vw;
        height: 1.8vw;
    }
}
</style>

<template>
  <button>
    <img
      class="icon"
      :src="icon"
    >
  </button>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
button {
    cursor: pointer;
    border: none;
    background-color: v-bind('props.color');
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.7vw;
    height: 2.7vw;
    border-radius: 0.5vw;

    .icon {
        width: 1.7vw;
        height: 1.7vw;
    }
}
</style>

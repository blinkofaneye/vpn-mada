<template>
  <div class="container">
    <label :for="id">
      <slot />
    </label>
    <input
      :id="id"
      type="text"
    >
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.container {
    color: #fff;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 2.3vh;

    label {
        margin-bottom: 1vh;
    }

    input {
        height: 6.24vh;
        background-color: #1B2D6B;
        border: none;
        outline: 0;
        border-radius: 0.7vh;
        color: #fff;
        padding-left: 0.5rem;
    }
}
</style>

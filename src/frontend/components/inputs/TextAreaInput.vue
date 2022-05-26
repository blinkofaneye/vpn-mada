<template>
  <div class="container">
    <label :for="id">
      <slot />
    </label>
    <textarea
      :id="id"
      rows="10"
    />
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

    textarea {
        height: 6.24vh;
        background-color: #1B2D6B;
        border: none;
        outline: 0;
        border-radius: 0.7vh;
        color: #fff;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        resize: none;
        height: 13.7vh;
    }
}
</style>

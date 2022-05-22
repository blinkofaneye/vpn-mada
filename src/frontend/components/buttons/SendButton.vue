<template>
  <button
    :disabled="loading"
    class="container"
  >
    <slot v-if="!loading" />
    <div v-else>
      Envoi...
    </div>
  </button>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.container {
    height: 6.3vh;
    width: 100%;
    background: linear-gradient(
        270deg,
        #560B57 10.48%,
        #9C15A5 51.96%,
        #560B57 87.62%
    );
    border-radius: 0.7vh;
    color: #fff;
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
    font-size: 2.3vh;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
</style>

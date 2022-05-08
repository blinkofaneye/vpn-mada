<script lang="ts" setup>
import {defineProps, defineEmits} from 'vue';
import MenuCloseButton from '@/components/buttons/MenuCloseButton.vue';
import MenuButton from '@/components/buttons/MenuButton.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['update:modelValue']);
</script>

<template>
  <div :class="{'menu-content--blur-layer': props.modelValue}">
    <slot />
  </div>
  <Transition>
    <div
      v-if="props.modelValue"
      class="menu-content--items"
    >
      <MenuCloseButton
        @click="$emit('update:modelValue', false)"
      />
      <slot name="items" />
    </div>
    <MenuButton
      v-else
      @click="$emit('update:modelValue', true)"
    />
  </Transition>
</template>

<style lang="scss" scoped>
.menu-content--items {
    position: absolute;
    top: 0;
    right: 0;
    width: 28.4vw;
    height: 100%;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.63);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.menu-content--blur-layer {
    filter: blur(2px);
    overflow-y: hidden;
    max-height: 100vh;
}
button.container {
    position: absolute;
    top: 8vh;
    right: 5.7vw;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="container">
    <slot />
    <div
      v-if="$slots.caption"
      class="caption"
    >
      <slot name="caption" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 3.1vh;
    color: #fff;
    text-align: center;

    .caption {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 2.3vh;
        margin-top: 1.5vh;
    }
}
</style>

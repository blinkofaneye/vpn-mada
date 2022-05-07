<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Condensed', sans-serif;
    color: #fff;
    font-size: 3.5vh;
    width: 100%;
    height: 10.6vh;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
        color: #000;
    }
}
</style>

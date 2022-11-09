<template>
  <button
    class="more-button--container"
    @click="$router.push('/login')"
  >
    Connexion
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      class="more-button--icon"
    >
      <!-- eslint-disable -->
        <path
            d="M15 0C6.729 0 0 6.729 0 15C0 23.271 6.729 30 15 30C23.271 30 30 23.271 30 15C30 6.729 23.271 0 15 0ZM15 22.5V16.5H7.5V13.5H15V7.5L22.5 15L15 22.5Z"
            fill="white"
        />
    <!-- eslint-enable -->
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.more-button {
    &--container {
        background: none;
        padding: 0;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        font-size: 3.1vh;
        min-width: 23.7vw;
        min-height: 6.2vh;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        border-style: solid;
        border-width: 1px;
        border-color: #fff;
        border-radius: 0.6vw;

        &:hover {
            background-color: #fff;
            color: #000;
        }

        &:hover path {
            fill: #000;
        }
    }

    &--icon {
        width: 2vw;
        height: 2vw;
        margin-left: 1.1vw;
    }
}
</style>

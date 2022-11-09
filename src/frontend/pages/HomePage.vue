<template>
  <div class="container">
    <div class="content">
      <div class="header">
        Virtual Private Network
      </div>
      <p>
        Le premier vpn à petit prix à madagascar.
        Accédez à Netflix, Spotify, Amazon Prime Video
        et bien d’autres sans aucune restriction.
      </p>
      <p>
        Vos données seront aussi protégées grâce à l’utilisation
        de notre service de vpn. Optez pour VPN Mada dès maintenant !
      </p>
      <MoreButton class="more-button" />
      <router-link
        title="Contact"
        to="/contact"
        class="contact"
      >
        Nous contacter
      </router-link>
      <div>
        <CopyrightText />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {RouterLink} from 'vue-router';
import MoreButton from '@/components/buttons/MoreButton.vue';
import CopyrightText from '@/components/display/CopyrightText.vue';
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    243.55deg,
    #071742 37.53%,
    #3644C9 42.76%,
    #3644C9 42.77%,
    #0A0A18 47.98%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
      color: #fff;
      width: 61.8vw;
  }

  p {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 3.1vh;
  }
}

.header {
    font-size: 6.2vh;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-bottom: 2.2vh;
}

.more-button {
    margin-top: 3.4vh;
}

.contact {
    font-family: Roboto;
    color: #fff;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    text-decoration: none;
    border-bottom: 1px solid #fff;
    padding-bottom: 5px;
}

.copyright {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%);
}
</style>

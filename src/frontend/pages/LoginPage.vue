<template>
  <div class="login-page--container">
    <div class="content">
      <ContentHeading class="heading">
        Vous pouvez vous connecter sur cette page

        <template #caption>
          Rejoignez nous 🔥️
        </template>
      </ContentHeading>

      <TextInput id="phone">
        Numéro de téléphone
      </TextInput>

      <div class="password">
        <TextInput id="password">
          Mot de passe
        </TextInput>
      </div>

      <SendButton>
        Se connecter
      </SendButton>
    </div>

    <div class="footer">
      <WavesFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentHeading from '@/components/typography/ContentHeading.vue';
import TextInput from '@/components/inputs/TextInput.vue';
import SendButton from '@/components/buttons/SendButton.vue';
import WavesFooter from '@/components/decors/WavesFooter.vue';
</script>

<style lang="scss" scoped>
.login-page--container {
    background-color: #0A0A18;
    height: 100vh;
    display: flex;

    .content {
        width: 45.3vw;
        margin: auto;

        .heading {
            margin-bottom: 6.3vh;
        }

        .password {
            margin-top: 1.1vh;
            margin-bottom: 3.6vh;
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
    }
}
</style>

<template>
  <div class="contact-page--container">
    <div class="content">
      <ContentHeading>
        Nous sommes ravis que vous nous contactiez !
      </ContentHeading>

      <div class="row">
        <TextInput id="last-name">
          Nom(s)
        </TextInput>
        <TextInput id="first-name">
          Prénom(s)
        </TextInput>
      </div>

      <div class="row">
        <TextInput id="phone">
          Numéro de téléphone
        </TextInput>
      </div>

      <div class="row">
        <TextAreaInput id="phone">
          Message (ex: j'aimerais créer un compte)
        </TextAreaInput>
      </div>

      <div class="send-button">
        <SendButton @click="onSend">
          Envoyer
        </SendButton>
      </div>
    </div>

    <div class="footer">
      <WavesFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ContentHeading from '@/components/typography/ContentHeading.vue';
import TextInput from '@/components/inputs/TextInput.vue';
import TextAreaInput from '@/components/inputs/TextAreaInput.vue';
import SendButton from '@/components/buttons/SendButton.vue';
import WavesFooter from '@/components/decors/WavesFooter.vue';

const onSend = () => {
  alert('Votre message a bien été reçu. Merci et à bientôt');
};
</script>

<style lang="scss" scoped>
.contact-page--container {
    background-color: #0A0A18;
    height: 100vh;
    display: flex;

    .content {
        width: 45.3vw;
        margin: auto;

        .row {
            display: flex;
            gap: 4px;
            margin-top: 1.7vh;
            margin-bottom: 1.7vh;

            * {
                flex: 1;
            }
        }

        .send-button {
            margin: auto;
            width: 28.4vw;
            position: relative;
            z-index: 3;
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
    }
}
</style>

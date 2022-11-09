<template>
  <div class="login-page--container">
    <div class="content">
      <ContentHeading class="heading">
        Vous pouvez vous connecter sur cette page

        <template #caption>
          Rejoignez nous 🔥️
        </template>
      </ContentHeading>

      <TextInput
        id="phone"
        :value="data.login"
        @input="data.login = $event.target.value"
      >
        Numéro de téléphone
      </TextInput>

      <div class="password">
        <TextInput
          id="password"
          type="password"
          :value="data.password"
          @input="data.password = $event.target.value"
        >
          Mot de passe
        </TextInput>
      </div>

      <SendButton @click="onLogin">
        Se connecter
      </SendButton>
    </div>

    <div class="footer">
      <WavesFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import ContentHeading from '@/components/typography/ContentHeading.vue';
import TextInput from '@/components/inputs/TextInput.vue';
import SendButton from '@/components/buttons/SendButton.vue';
import WavesFooter from '@/components/decors/WavesFooter.vue';

const router = useRouter();

const data = ref({
  login: '',
  password: '',
});

const onLogin = () => {
  const didPass = [
    'mratiarison@gmail.com',
    'administrateur@iestime.com',
  ].includes(data.value.login) &&
  data.value.password === 'iestime2022';
  if (didPass) {
    router.replace('/profiles-management-page');
  } else {
    alert('Mot de passe ou email invalide !');
  }
};
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
